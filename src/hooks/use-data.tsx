'use client'

import { ReactNode, createContext, useContext } from 'react'

export type MarkdownMetadata = {
  title: string
  path: string
  description: string
  segment: string
  children: MarkdownMetadata[]
}

export type FlattenedMarkdownMetadata = {
  title: string
  path: string
  description: string
  segment: string
}

type DataContextType = {
  markdownMetadatas: MarkdownMetadata[]
  flattenedMardownMetadata: FlattenedMarkdownMetadata[]
}

export const DataContext = createContext<DataContextType>({} as DataContextType)

type DataProviderProps = {
  children: ReactNode
  markdownMetadatas: MarkdownMetadata[]
}

export function DataProvider({
  children,
  markdownMetadatas,
}: DataProviderProps) {
  function flattenMarkdownMetadata() {
    const flattenedMetadata: FlattenedMarkdownMetadata[] = []

    const processMetadata = (metadata: MarkdownMetadata[]) => {
      for (const item of metadata) {
        if (item.children && item.children.length > 0) {
          processMetadata(item.children)
        } else {
          flattenedMetadata.push({
            title: item.title,
            path: item.path,
            description: item.description,
            segment: item.segment,
          })
        }
      }
    }

    processMetadata(markdownMetadatas)
    return flattenedMetadata
  }

  const flattenedMardownMetadata = flattenMarkdownMetadata()

  return (
    <DataContext.Provider
      value={{ markdownMetadatas, flattenedMardownMetadata }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
