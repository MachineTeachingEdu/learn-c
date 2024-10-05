/* eslint-disable no-plusplus */

'use client'

import { FlattenedMarkdownMetadata, useData } from '@/hooks/use-data'
import { Box, Paper } from '@mui/material'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import Link from 'next/link'
import { blue } from '@mui/material/colors'
import { usePathname } from 'next/navigation'
import { H6, P } from './md/Typography'

type NavigatorItemProps = {
  item: FlattenedMarkdownMetadata
  direction: string
}

export function NavigatorItem({ item, direction }: NavigatorItemProps) {
  const isPrev = direction === 'prev'

  return (
    <Paper
      variant="outlined"
      component={Link}
      href={`/${item.path}`}
      sx={{
        p: 1,
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        textDecoration: 'none',
        flex: 1,
        '&:hover': {
          color: blue[700],
        },
      }}
    >
      {isPrev ? (
        <>
          <Box>
            <AiFillCaretLeft size={38} />
          </Box>
          <Box>
            <H6>{item.title}</H6>
            <P>{item.description}</P>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <H6>{item.title}</H6>
            <P>{item.description}</P>
          </Box>
          <Box>
            <AiFillCaretRight size={38} />
          </Box>
        </>
      )}
    </Paper>
  )
}

export default function Navigator() {
  const pathname = usePathname().slice(1)
  const { flattenedMardownMetadata } = useData()

  const currentIndex = flattenedMardownMetadata.findIndex(
    (metadata) => metadata.path === pathname
  )

  const prev =
    currentIndex > 0 ? flattenedMardownMetadata[currentIndex - 1] : null
  const next =
    currentIndex + 1 < flattenedMardownMetadata.length
      ? flattenedMardownMetadata[currentIndex + 1]
      : null

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        gap: 2,
        mt: 4,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      })}
    >
      {prev && <NavigatorItem direction="prev" item={prev} />}
      {next && <NavigatorItem direction="next" item={next} />}
    </Box>
  )
}
