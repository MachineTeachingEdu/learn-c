import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeComponents from "rehype-components";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from 'rehype-stringify'
import remarkDirective from 'remark-directive'
import {h} from 'hastscript'
import { unified } from "unified";
import { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const getParser = () => unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkEmbed)
  .use(remarkRehype)
  .use(rehypeComponents, {
    components: {
      embed: (props, children) => {
        return h('div', {className: 'embed'}, [
          h('iframe', {
            src: props.src,
            width: props.width,
            height: props.height,
            title: props.title,
            allowFullScreen: true,
            frameBorder: 0,
          })
        ])
      }
    }
  })
  // .use(rehypeSanitize)
  .use(rehypeHighlight)
  .use(rehypeStringify);

const parser = getParser();

export async function processMarkdown(text: string): Promise<string> {
  const file = await parser.process(text);
  return file.value.toString();
}

type EmbedAttributes = {
  src: string;
  width?: string;
  height?: string;
  title?: string;
}

function remarkEmbed() {
  return function (tree: Root): void {
    visit(tree, function (n) {  
      const node = n as any;
      if (node.type === 'leafDirective' && node.name === 'embed') {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes as EmbedAttributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    });
  };
}