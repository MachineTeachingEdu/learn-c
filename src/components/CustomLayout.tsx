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
  ListItemText,
  Box,
  IconButton,
  Collapse,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { grey } from '@mui/material/colors'
import { MarkdownMetadata, useData } from '@/hooks/use-data'
import Branding from './Branding'

type CustomNavigation = {
  title: string
  children?: CustomNavigation[]
}

const fixNavigationSegment = (
  markdownMetadatas: MarkdownMetadata[]
): CustomNavigation[] =>
  markdownMetadatas.map(({ title, children }) => ({
    title,
    children: children.length ? fixNavigationSegment(children) : undefined,
  }))

const NestedList: React.FC<{ items: CustomNavigation[] }> = ({ items }) => (
  <List>
    {items.map((item) => (
      <React.Fragment key={item.title}>
        <ListItem component={Link} href="">
          <ListItemText primary={item.title} sx={{ marginLeft: 1 }} />
        </ListItem>
        {item.children && item.children.length > 0 && (
          <List component="div" disablePadding>
            <Box sx={{ pl: 4 }}>
              <NestedList items={item.children} />
            </Box>
          </List>
        )}
      </React.Fragment>
    ))}
  </List>
)

const TestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
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
            <NestedList items={markdownMetadatas} />
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
