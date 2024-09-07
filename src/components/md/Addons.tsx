import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReactNode } from 'react'

export type AccordionProps = {
  title: string
  children: ReactNode
}

export function Accordion(props: AccordionProps) {
  return (
    <MuiAccordion
      sx={{
        boxShadow: 1,
        borderRadius: 1,
        mb: 2,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>{props.children}</Box>
      </AccordionDetails>
    </MuiAccordion>
  )
}

export type EmbedProps = {
  src: string
  width?: string
  height?: string
  title?: string
}

export function Embed(props: EmbedProps) {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBlock: '1rem',
        position: 'relative',
        paddingBottom: '56.25%',
        height: '0',
        overflow: 'hidden',
      }}
    >
      <Box
        component="iframe"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        {...props}
      />
    </Box>
  )
}

export default {}
