"use client"

import clsx from "clsx"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"
import Icon from "@/components/common/Icon"
import Tooltip from "@/components/common/Tooltip"
import AddAttachment from "@/app/_components/AddAttachment"

const maxLength = 1000

export default function Chat() {
  const router = useRouter()
  const { addMessage } = useChatStore()

  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const [prompt, setPrompt] = useState<string>("")

  const onSubmit = () => {
    const id = generateRandomId()

    addMessage(id, {
      role: "user",
      content: prompt,
    })
    router.push(`/chat/${id}`)
  }

  return (
    <section
      className={clsx(
        "w-full space-y-2 bg-white shadow-sm rounded-xl border p-4 border-neutral-150",
        isHomePage ? "sm:mt-16" : ""
      )}
    >
      <textarea
        rows={isHomePage ? 5 : 1}
        value={prompt}
        maxLength={maxLength}
        className="bg-transparent text-sm w-full resize-none placeholder:text-black focus:outline-none"
        placeholder="Ask whatever you want..."
        onChange={e => setPrompt(e.target.value)}
      />

      <footer className="flex text-sm items-end justify-between">
        <AddAttachment />

        <div className="space-x-2 flex items-center">
          <span className="ml-auto text-neutral-500 font-medium">
            {prompt.length}/{maxLength}
          </span>

          <Tooltip id="send" content="Send" place="top">
            <button
              onClick={onSubmit}
              className="rounded-xl p-1.5 text-white bg-gradient-to-t from-purple-900 to-purple-600"
            >
              <Icon name="arrowUp" size={16} strokeWidth={2} />
            </button>
          </Tooltip>
        </div>
      </footer>
    </section>
  )
}
