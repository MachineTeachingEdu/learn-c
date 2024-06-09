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
  markdown: MarkdownMetadata;
};

function ListItem(props: ListItemProps) {
  return (
    <li>
      <Link className={`no-underline ${props.isActive ? 'font-bold text-blue-900' : 'text-black'}`} href={`/aulas/${props.markdown.slug}`}>
        {props.markdown.data.title}
      </Link>
    </li>
  );
}

export default function Container({ children }: ContainerProps) {
  const { markdowns } = useData();
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
        <hr className="border-none h-[.5px] bg-black opacity-20" />
        <nav className="p-4">
          <h2 className="text-xl font-bold">
            Lista de Aulas
          </h2>
          <ul className="list-decimal mt-3 flex flex-col gap-1">
            {markdowns.map((markdown, i) => (
              <ListItem
                key={`item-list-${i}`}
                isActive={pathname.includes(markdown.slug)}
                markdown={markdown}
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
