'use client'

import { AppProvider, Navigation } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import React, { ReactNode } from 'react'
import { MarkdownMetadata, useData } from '@/hooks/use-data'
import { Box, createTheme } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
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

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

type LayoutProps = {
  children: ReactNode
  pathname: string
  window?: () => Window
}

// Componente de layout
export default function Layout({ window, pathname, children }: LayoutProps) {
  const { push } = useRouter()
  const { markdownMetadatas } = useData()
  const markdownSegments = [
    {
      segment: '',
      title: 'Início',
      icon: <FaHome />,
      kind: 'page',
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Aulas',
    },
    ...fixNavigationSegment(markdownMetadatas),
  ] as Navigation

  const router = {
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path: string | URL) => push(path as string),
  }

  return (
    <AppProvider
      router={router}
      branding={{
        logo: <Branding />,
        title: '',
      }}
      theme={theme}
      navigation={markdownSegments}
      window={window?.()}
    >
      <DashboardLayout>
        <Box
          sx={{
            display: 'flex',
            maxWidth: '950px',
            width: '90%',
            margin: '30px auto',
          }}
        >
          {children}
        </Box>
      </DashboardLayout>
    </AppProvider>
  )
}
