import matter from 'gray-matter'
import { cache } from 'react'
import fs from 'fs'
import path from 'path'
import { readFile } from './read-file'

export const getMarkdownBySlug = cache(async (slug: string[]) => {
  let file = readFile(`./md/${slug.join('/')}.md`)
  if (!file) file = fs.readFileSync(`./md/${slug.join('/')}/index.md`, 'utf-8')

  const { content, data } = matter(file)
  return {
    content,
    data,
  }
})

export const generateMarkdownSlugs = cache(async () => {
  const folderTree: string[] = []

  function readDir(currentPath: string) {
    const items = fs.readdirSync(currentPath, {
      withFileTypes: true,
    })

    for (const item of items) {
      const fullPath = path.join(currentPath, item.name)
      if (item.isDirectory()) {
        readDir(fullPath)
        continue
      }
      const { content } = matter(fs.readFileSync(fullPath))
      if (content) {
        folderTree.push(
          fullPath
            .replace(/^md\/?/, '')
            .replace(/\/index\.md$/, '')
            .replace(/\.md$/, '')
        )
      }
    }
  }

  readDir('./md')
  return folderTree
})

export default {}
