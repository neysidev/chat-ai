"use client"

import clsx from "clsx"
import { usePathname } from "next/navigation"

import AddAttachment from "./AddAttachment"
import CharLengthMessage from "./CharLengthMessage"
import PromptInput from "./PromptInput"
import SendMessageButton from "./SendMessageButton"

export default function Chat() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <section
      className={clsx(
        "w-full space-y-2 bg-white shadow-sm rounded-xl border p-4 border-neutral-150",
        isHomePage && "sm:mt-16"
      )}
    >
      <PromptInput />

      <footer className="flex text-sm items-end justify-between">
        <AddAttachment />
        <div className="space-x-2 flex items-center">
          <CharLengthMessage />
          <SendMessageButton />
        </div>
      </footer>
    </section>
  )
}
