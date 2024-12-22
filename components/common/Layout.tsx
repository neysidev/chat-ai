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
          "flex-1 p-4 max-h-screen overflow-y-auto",
          isHomePage && "sm:grid sm:place-items-center"
        )}
      >
        <section
          className={clsx(
            "max-w-3xl min-w-3xl mx-auto h-full relative",
            isHomePage &&
              "flex flex-col h-full items-start justify-between sm:h-auto"
          )}
        >
          <MenuButton />
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
