import { MarkdownMetadata } from "@/hooks/use-data"

export type CustomNavigation = {
    title: string
    segment: string
    children?: CustomNavigation[]
}
  
export const fixNavigationSegment = (
    markdownMetadatas: MarkdownMetadata[]
): CustomNavigation[] => markdownMetadatas.map(({ title, segment, children }) => ({
    title,
    segment,
    children: children.length ? fixNavigationSegment(children) : undefined,
}))