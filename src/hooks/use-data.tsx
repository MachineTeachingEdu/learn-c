'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ReactNode, createContext,
  useContext,
} from 'react';

export type MarkdownMetadata = {
  slug: string;
  title: string;
  subtitle: string;
};

type DataContextType = {
  markdownListMetadata: MarkdownMetadata[];
};

export const DataContext = createContext<DataContextType>({} as DataContextType);

type DataProviderProps = {
  children: ReactNode;
  markdownListMetadata: MarkdownMetadata[];
};

export function DataProvider({ children, markdownListMetadata }: DataProviderProps) {
  return (
    <DataContext.Provider value={{ markdownListMetadata }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
