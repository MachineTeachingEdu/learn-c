import { Box } from '@mui/material'
import { ReactNode } from 'react'

export type CodeProps = {
  children: ReactNode
}

export type PreProps = {
  children: {
    type: string
    props: {
      className: string
      children: ReactNode
    }
  }
}
export function Pre({
  children: {
    props: { className, children },
  },
}: PreProps) {
  return (
    <Box
      component="pre"
      sx={{
        whiteSpace: 'pre-wrap',
      }}
    >
      <Box component="code" className={className} m={0}>
        {children}
      </Box>
    </Box>
  )
}
