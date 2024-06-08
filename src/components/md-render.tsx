/* eslint-disable func-names */

'use client';

import {
  Fragment, createElement, useEffect, useState,
} from 'react';
import * as prod from 'react/jsx-runtime';

import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import {
  Code,
  H1, H2, H3, H4, H5, H6, Li,
  Link,
  Ol,
  Paragraph,
  Pre,
  Ul,
} from './md-elements';

type MdRenderProps = {
  content: string;
};

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: Paragraph,
    ol: Ol,
    ul: Ul,
    li: Li,
    a: Link,
    pre: Pre,
    code: Code,
  },
};

function useProcessor(text: string) {
  const [Content, setContent] = useState(createElement(Fragment));

  useEffect(
    () => {
      (async function () {
        const file = await unified()
          .use(remarkParse, { fragment: true })
          .use(remarkRehype)
          .use(rehypeReact, production as any)
          .process(text);
        setContent(file.result);
      }());
    },
    [text],
  );

  return Content;
}

export default function MdRender({ content }: MdRenderProps) {
  return useProcessor(content);
}
