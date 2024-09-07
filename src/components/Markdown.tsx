'use client';

import { Box } from "@mui/material";
import { unified } from 'unified';
import parse from 'remark-parse';
import rehypeReact from 'rehype-react'
import remarkRehype from "remark-rehype";

import * as prod from 'react/jsx-runtime'
const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs}

type MarkdownProps = {
    text: string;
}

export default function Markdown({ text }: MarkdownProps) {
    const content = unified()
        .use(parse)
        .use(remarkRehype)
        .use(rehypeReact, production as any)
        .processSync(text).result;

    return (
        <Box>
            {content}
        </Box>
    )
}