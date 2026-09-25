import Image from "next/image"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"

import { useTypingEffect } from "@/hooks"

export default function SystemMessage({ children }: { children: string }) {
  const typedText = useTypingEffect(children)

  return (
    <div className="flex space-x-2 items-start max-w-[90%] sm:max-w-[80%]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        className="rounded-full"
      />

      <div className="system-message overflow-x-auto bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 p-4 rounded-xl transition-colors duration-200">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {typedText}
        </ReactMarkdown>
      </div>
    </div>
  )
}
