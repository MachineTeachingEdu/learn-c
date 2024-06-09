import matter from 'gray-matter';
import fs from 'fs';
import { cache } from 'react';
import { MarkdownMetadata } from '@/hooks/use-data';

/* eslint-disable import/prefer-default-export */
export const getMarkdown = cache(async (slug: string) => {
  const file = fs.readFileSync(`./md/${slug}.md`, 'utf-8');
  const { content, data } = matter(file);
  return {
    content,
    data,
  };
});

export const getMarkdowns: () => Promise<MarkdownMetadata[]> = cache(async () => {
  const files = fs.readdirSync('./md');
  const markdowns = files.map((file) => {
    const slug = file.replace('.md', '');
    const { data } = matter(fs.readFileSync(`./md/${file}`, 'utf-8'));
    return {
      slug,
      data,
    } as MarkdownMetadata;
  });
  return markdowns;
});
