import { MarkdownMetadata } from '@/hooks/use-data'

export type CustomNavigation = {
  title: string
  segment: string
  path: string
  children?: CustomNavigation[]
}

export const fixNavigationSegment = (
  markdownMetadatas: MarkdownMetadata[]
): CustomNavigation[] =>
  markdownMetadatas.map(({ title, segment, path, children }) => ({
    title,
    segment,
    path,
    children: children.length ? fixNavigationSegment(children) : undefined,
  }))
