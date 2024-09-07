'use client'

import { ReactNode, createContext, useContext } from 'react'

export type MarkdownMetadata = {
  title: string
  path: string
  segment: string
  children: MarkdownMetadata[]
}

type DataContextType = {
  markdownMetadatas: MarkdownMetadata[]
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
  return (
    <DataContext.Provider value={{ markdownMetadatas }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
