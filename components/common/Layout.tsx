"use client"

import clsx from "clsx"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren } from "react"

import Sidebar from "../Sidebar"
import MenuButton from "./MenuButton"

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className="flex h-screen divide-x divide-neutral-200">
      <Sidebar />

      <main
        className={clsx(
          "flex-1 sm:p-4 max-h-screen flex flex-col overflow-y-auto",
          isHomePage && "sm:grid sm:place-items-center"
        )}
      >
        <MenuButton />
        <section
          className={clsx(
            "lg:max-w-3xl p-4 sm:p-0 lg:min-w-[48rem] max-w-full mx-auto flex-1 relative",
            isHomePage && "flex flex-col items-start justify-between sm:h-auto"
          )}
        >
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
