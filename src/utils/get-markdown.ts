import matter from 'gray-matter';
import fs from 'fs';
import { cache } from 'react';

/* eslint-disable import/prefer-default-export */
export const getMarkdown = cache(async (slug: string) => {
  const file = fs.readFileSync(`./md/${slug}.md`, 'utf-8');
  const { content, data } = matter(file);
  return {
    content,
    data,
  };
});
