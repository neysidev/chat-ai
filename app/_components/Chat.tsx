"use client"
import { useState } from "react"
import Icon from "@/components/common/Icon"

const maxLength = 1000

export default function Chat() {
  const [prompt, setPrompt] = useState<string>("")

  return (
    <section className="sm:mt-16 w-full space-y-2 bg-white shadow-sm rounded-xl border p-4 border-neutral-150">
      <textarea
        rows={5}
        value={prompt}
        maxLength={maxLength}
        className="bg-transparent text-sm w-full h-full resize-none placeholder:text-black focus:outline-none"
        placeholder="Ask whatever you want..."
        onChange={e => setPrompt(e.target.value)}
      />

      <footer className="flex text-sm justify-between">
        <div className="space-x-2 sm:space-x-5 flex">
          <button className="flex space-x-1 font-medium text-neutral-600 transition-colors select-none hover:text-neutral-800">
            <Icon name="plus" size={20} />
            <span className="hidden sm:block">Add Attachment</span>
          </button>

          <button className="flex space-x-1 font-medium text-neutral-600 transition-colors select-none hover:text-neutral-800">
            <Icon name="image" size={20} />
            <span className="hidden sm:block">Use Image</span>
          </button>
        </div>

        <div className="space-x-2 flex items-center">
          <span className="ml-auto text-neutral-500 font-medium">
            {prompt.length}/{maxLength}
          </span>

          <button className="rounded-xl p-1.5 text-white bg-gradient-to-t from-purple-900 to-purple-600">
            <Icon name="arrowUp" size={16} strokeWidth={2} />
          </button>
        </div>
      </footer>
    </section>
  )
}
