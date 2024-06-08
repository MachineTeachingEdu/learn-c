'use client';

import { MarkdownMetadata, useData } from '@/hooks/use-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
};

type ListItemProps = {
  isActive: boolean;
  data: MarkdownMetadata;
  index: number;
};

function ListItem(props: ListItemProps) {
  return (
    <li className={`${props.isActive && 'font-bold text-blue-900'}`}>
      <Link href={`/aulas/${props.data.slug}`}>
        <span className="text-bold">
          {`${props.index + 1}. `}
        </span>
        {props.data.title}
      </Link>
    </li>
  );
}

export default function Container({ children }: ContainerProps) {
  const { markdownListMetadata } = useData();
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-[400px]">
        <header className="flex items-center justify-center gap-3 p-4">
          <img className="w-14" src="/unirio.png" alt="UNIRIO" />
          <h1 className="text-xl">
            Técnicas de Programação 1
          </h1>
        </header>
        <hr />
        <nav className="p-4">
          <h2 className="text-xl font-bold">
            Lista de Aulas
          </h2>
          <ul className="mt-3 flex flex-col gap-1">
            {markdownListMetadata.map((markdownMetadata, i) => (
              <ListItem
                key={`item-list-${i}`}
                isActive={pathname.includes(markdownMetadata.slug)}
                data={markdownMetadata}
                index={i}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-gray-50 w-full">
        {children}
      </div>
    </div>
  );
}
