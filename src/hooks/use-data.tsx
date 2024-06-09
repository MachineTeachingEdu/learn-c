'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ReactNode, createContext,
  useContext,
} from 'react';

export type MarkdownMetadata = {
  data: {
    title: string;
  }
  slug: string;
};

type DataContextType = {
  markdowns: MarkdownMetadata[];
};

export const DataContext = createContext<DataContextType>({} as DataContextType);

type DataProviderProps = {
  children: ReactNode;
  markdowns: MarkdownMetadata[];
};

export function DataProvider({ children, markdowns }: DataProviderProps) {
  return (
    <DataContext.Provider value={{ markdowns }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
