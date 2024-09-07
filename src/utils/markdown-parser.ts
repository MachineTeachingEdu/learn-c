/* eslint-disable @typescript-eslint/no-explicit-any */
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export type EmbedAttributes = {
  src: string
  width?: string
  height?: string
  title?: string
}

export type AccordionAttributes = {
  title: string
}

export default function remarkEmbed() {
  return (tree: any) => {
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
