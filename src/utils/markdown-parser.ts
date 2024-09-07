/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import rehypeHighlight from 'rehype-highlight'
import rehypeComponents from 'rehype-components'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkDirective from 'remark-directive'
import remarkHeadingId from 'remark-heading-id'
import remarkHeadings, {
  Heading,
  hasHeadingsData,
} from '@vcarl/remark-headings'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'
import { unified } from 'unified'
import { Root } from 'mdast'
import { visit } from 'unist-util-visit'

type EmbedAttributes = {
  src: string
  width?: string
  height?: string
  title?: string
}

type AccordionAttributes = {
  title: string
}

function remarkEmbed() {
  return function (tree: Root): void {
    visit(tree, (n) => {
      const node = n as any
      if (node.type === 'leafDirective' && node.name === 'embed') {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes as EmbedAttributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties

        if (hast.properties.src) {
          data.hProperties = {
            ...data.hProperties,
            allow:
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            referrerPolicy: 'strict-origin-when-cross-origin',
            loading: 'lazy',
          }
        }
      }

      if (node.type === 'containerDirective' && node.name === 'accordion') {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes as AccordionAttributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}

const getParser = () =>
  unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkEmbed)
    .use(remarkHeadingId, {
      defaults: true,
    })
    .use(remarkHeadings)
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings)
    .use(rehypeComponents, {
      components: {
        embed: (props) =>
          h('div', { className: 'embed' }, [
            h('iframe', {
              src: props.src,
              width: props.width,
              height: props.height,
              title: props.title,
              allowFullScreen: true,
              frameBorder: 0,
              allow: props.allow,
              referrerPolicy: props.referrerPolicy,
              loading: props.loading,
            }),
          ]),
      },
    })
    .use(rehypeHighlight)

const parser = getParser()

export async function processMarkdown(text: string): Promise<{
  data: string
  headings: { value: string; id: string }[]
}> {
  const file = await parser.process(text)
  const headings = hasHeadingsData(file.data)
    ? (file.data.headings as Heading[])
    : []

  return {
    data: String(file),
    headings: headings.map((heading) => ({
      value: heading.value,
      id: heading.data.id,
    })),
  }
}
