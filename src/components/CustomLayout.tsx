/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */

'use client'

/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Box,
  IconButton,
  Collapse,
  Button,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { grey } from '@mui/material/colors'
import { MarkdownMetadata, useData } from '@/hooks/use-data'
import { usePathname } from 'next/navigation'

import Branding from './Branding'

type CustomNavigation = {
  title: string
  segment: string
  children?: CustomNavigation[]
}

const fixNavigationSegment = (
  markdownMetadatas: MarkdownMetadata[]
): CustomNavigation[] =>
  markdownMetadatas.map(({ title, segment, children }) => ({
    title,
    segment,
    children: children.length ? fixNavigationSegment(children) : undefined,
  }))

const NestedList: React.FC<{
  items: CustomNavigation[]
  prevSegment: string
  pathname: string
}> = ({ items, prevSegment = '', pathname }) => (
  <List>
    {items.map((item) => (
      <NestedListItem
        key={item.title}
        item={item}
        prevSegment={prevSegment}
        pathname={pathname}
      />
    ))}
  </List>
)

interface NestedListItemProps {
  item: CustomNavigation
  prevSegment: string
  pathname: string
}

const NestedListItem: React.FC<NestedListItemProps> = ({
  item,
  prevSegment,
  pathname,
}) => {
  const href = `${prevSegment}/${item.segment}`
  const isActive = href === pathname

  return (
    <React.Fragment key={item.title}>
      <ListItem>
        {item.children && item.children.length > 0 ? (
          <Typography variant="body1" sx={{ pl: 1.5 }}>
            {item.title}
          </Typography>
        ) : (
          <Button
            component={Link}
            href={href}
            variant="text"
            size="large"
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              color: isActive ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {item.title}
          </Button>
        )}
      </ListItem>
      {item.children && item.children.length > 0 && (
        <List component="div" disablePadding>
          <Box sx={{ pl: 2 }}>
            {item.children.map((child) => (
              <NestedListItem
                key={child.title}
                item={child}
                prevSegment={`${prevSegment}/${item.segment}`}
                pathname={pathname}
              />
            ))}
          </Box>
        </List>
      )}
    </React.Fragment>
  )
}

const TestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  const markdownMetadatas = fixNavigationSegment(useData().markdownMetadatas)

  return (
    <Box position="relative">
      <Box position="sticky" top={0} zIndex={1000}>
        <AppBar
          position="relative"
          variant="outlined"
          sx={{
            background: grey[100],
            px: 3,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Toolbar>
            <Branding />
          </Toolbar>

          <IconButton onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </AppBar>

        <Box
          sx={{
            backgroundColor: grey[200],
            position: 'absolute',
            width: '100%',
            maxHeight: '400px',
            overflowY: 'scroll',
            px: 3,
          }}
        >
          <Collapse orientation="vertical" in={open}>
            <NestedList
              pathname={pathname}
              items={markdownMetadatas}
              prevSegment=""
            />
          </Collapse>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          py: 4,
          display: 'flex',
          width: '95%',
          maxWidth: '900px',
          margin: '0 auto',
          gap: 10,
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default TestLayout
