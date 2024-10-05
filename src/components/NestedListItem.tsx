import React from 'react'
import Link from 'next/link'
import { ListItem, Typography, Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import { CustomNavigation } from '@/utils/navigation'
import generateRandomKey from '@/utils/random'

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
  const hasChildren = item.children && item.children.length > 0

  return (
    <>
      {hasChildren ? (
        <ListItem key={generateRandomKey()}>
          <Typography fontWeight={700}>{item.title}</Typography>
        </ListItem>
      ) : (
        <ListItem
          key={generateRandomKey()}
          component={Link}
          href={href}
          sx={{ background: isActive ? grey[300] : 'transparent' }}
        >
          <Typography color={grey[800]}>{item.title}</Typography>
        </ListItem>
      )}
      {hasChildren && (
        <Box sx={{ pl: 2 }}>
          {item.children &&
            item.children.length > 0 &&
            item.children.map((child) => (
              <NestedListItem
                key={generateRandomKey()}
                item={child}
                prevSegment={`${prevSegment}/${item.segment}`}
                pathname={pathname}
              />
            ))}
        </Box>
      )}
    </>
  )
}

export default NestedListItem
