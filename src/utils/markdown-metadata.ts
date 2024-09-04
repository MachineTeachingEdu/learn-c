import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

type MarkdownMetadata = {
  title: string
  path: string
  children: MarkdownMetadata[]
}

function getMarkdownMetadatas(currentPath: string): MarkdownMetadata[] {
  const markdownMetadata: MarkdownMetadata[] = []
  const items = fs.readdirSync(currentPath, {
    withFileTypes: true,
  })

  if (items.length === 1 && items[0].name.endsWith('index.md')) {
    return []
  }

  for (const item of items) {
    const fullPath = path.join(currentPath, item.name)
    const realPath = fullPath
      .replace(/^md\/?/, '')
      .replace(/\/index\.md$/, '')
      .replace(/\.md$/, '')

    if (item.isDirectory()) {
      const { data } = matter(fs.readFileSync(`${fullPath}/index.md`, 'utf-8'))
      markdownMetadata.push({
        title: data.title,
        path: realPath,
        children: getMarkdownMetadatas(fullPath),
      })
      continue
    }
    const { content, data } = matter(fs.readFileSync(fullPath))
    if (content) {
      markdownMetadata.push({
        title: data.title,
        path: realPath,
        children: [],
      })
    }
  }
  return markdownMetadata
}

export const generateMarkdownMetadata = cache(async () =>
  getMarkdownMetadatas('./md')
)

export default {}
