'use client'

import React, { useState } from 'react'
import { Box, Collapse } from '@mui/material'
import { useData } from '@/hooks/use-data'
import { usePathname } from 'next/navigation'
import { fixNavigationSegment } from '@/utils/navigation'
import NestedList from './NestedList'
import NavBar from './Navbar'

const TestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const markdownMetadatas = fixNavigationSegment(useData().markdownMetadatas)

  return (
    <Box position="relative">
      <Box position="sticky" top={0} zIndex={1000}>
        <NavBar open={open} onToggle={() => setOpen(!open)} />
        <Box
          sx={{
            backgroundColor: 'grey.200',
            position: 'absolute',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
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
          width: '95%',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default TestLayout
