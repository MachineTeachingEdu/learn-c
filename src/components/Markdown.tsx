'use client'

import * as prod from 'react/jsx-runtime'
import remarkEmbed from '@/utils/markdown-parser'
import remarkParse from 'remark-parse'
import rehypeReact from 'rehype-react'
import remarkRehype from 'remark-rehype'
import remarkDirective from 'remark-directive'
import remarkHeadingId from 'remark-heading-id'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import remarkHeadings from '@vcarl/remark-headings'

import { Box } from '@mui/material'
import { unified } from 'unified'
import { Accordion, AccordionProps, Embed, EmbedProps } from './md/Addons'
import { H1, H2, H3, H4, H5, H6, P, TypographyProps } from './md/Typography'
import { Pre, PreProps } from './md/Code'

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  components: {
    h1: (props: TypographyProps) => <H1 {...props} />,
    h2: (props: TypographyProps) => <H2 {...props} />,
    h3: (props: TypographyProps) => <H3 {...props} />,
    h4: (props: TypographyProps) => <H4 {...props} />,
    h5: (props: TypographyProps) => <H5 {...props} />,
    h6: (props: TypographyProps) => <H6 {...props} />,
    p: (props: TypographyProps) => <P {...props} />,
    embed: (props: EmbedProps) => <Embed {...props} />,
    accordion: (props: AccordionProps) => <Accordion {...props} />,
    pre: (props: PreProps) => <Pre {...props} />,
  },
}

type MarkdownProps = {
  text: string
}

export default function Markdown({ text }: MarkdownProps) {
  const parsed = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkEmbed)
    .use(remarkHeadingId, {
      defaults: true,
    })
    .use(remarkHeadings)
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeReact, production as never)
    .processSync(text)

  return <Box>{parsed.result}</Box>
}
