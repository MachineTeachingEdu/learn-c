/* eslint-disable import/prefer-default-export */
import { MarkdownMetadata } from '@/hooks/use-data';
import fs from 'fs';
import matter from 'gray-matter';

export function getMarkdownListMetadata(): MarkdownMetadata[] {
  const files = fs.readdirSync('./md');
  const markdown = files.filter((file) => file.endsWith('.md'));
  return markdown.map((filename) => {
    const path = `./md/${filename}`;
    const file = fs.readFileSync(path, 'utf-8');
    const { data } = matter(file);
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      subtitle: data.subtitle,
    };
  });
}

export function getMarkdown(path: string): { content: string; data: Record<string, string> } {
  const file = fs.readFileSync(`./md/${path}.md`, 'utf-8');
  const { content, data } = matter(file);
  return {
    content,
    data,
  };
}
