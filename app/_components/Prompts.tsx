"use client"

import { useState } from "react"
import { Prompt, PROMPTS } from "@/fixtures/prompts"
import clsx from "clsx"

const count = 4

export default function Prompts() {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  const [prompts, setPrompts] = useState<Prompt[]>(PROMPTS.slice(0, count))

  const refreshPrompts = () => {
    if (isRefreshing) return

    setIsRefreshing(true)
    setTimeout(() => {
      const remainingPrompts = PROMPTS.filter(p => !prompts.includes(p))
      const newPrompts = remainingPrompts
        .sort(() => Math.random() - 0.5)
        .slice(0, count)

      setIsRefreshing(false)
      setPrompts(newPrompts)
    }, 750)
  }

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {prompts.map(({ text, icon }, index) => (
          <li
            key={index}
            title={text}
            className="text-xs border rounded-xl p-4 space-y-2 md:space-y-6 flex flex-col font-medium select-none cursor-pointer transition hover:bg-white hover:shadow-sm"
          >
            <span className="flex-1 line-clamp-2">{text}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-neutral-500"
            >
              {icon}
            </svg>
          </li>
        ))}
      </ul>
      <button
        onClick={refreshPrompts}
        className={clsx(
          "mt-2.5 text-xs transition-colors text-neutral-500 items-center space-x-1.5 flex",
          isRefreshing
            ? "opacity-50 cursor-not-allowed"
            : "hover:text-neutral-700"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx("size-4", isRefreshing && "animate-rotate360")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <span>Refresh Prompts</span>
      </button>
    </>
  )
}
