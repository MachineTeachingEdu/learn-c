'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import { ReactNode, useState } from 'react'

export type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  const [opened, setOpened] = useState(false)

  return (
    <div className="min-h-screen w-full xl:flex">
      <div className="sticky top-0 z-50 shadow-sm xl:static">
        <div className="relative z-30 flex h-16 justify-between bg-white p-3">
          <h1 className="text-2xl font-black text-gray-900">
            <span className="text-blue-500">{'{ '}</span>
            TP1
            <span className="text-blue-500">{' }'}</span>
          </h1>
          <button
            className="text-3xl xl:hidden"
            type="button"
            onClick={() => setOpened((e) => !e)}
          >
            {opened ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`absolute bg-white ${opened ? 'top-16' : '-top-full'} left-0 z-20 w-full px-3 pb-3 shadow-md xl:static xl:top-auto xl:h-full xl:min-w-[400px]`}
        >
          <hr />
          <h2 className="mt-3 text-xl font-bold">Lista de Aulas</h2>
        </nav>
      </div>
      <div className="mx-auto h-screen w-full overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}
