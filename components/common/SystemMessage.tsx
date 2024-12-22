import Image from "next/image"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"

export default function SystemMessage({ children }: { children: string }) {
  return (
    <div className="flex space-x-2 items-start max-w-[90%] sm:max-w-[80%]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        className="rounded-full"
      />

      <div className="system-message overflow-x-auto bg-white border border-neutral-200 p-4 rounded-xl">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {children}
        </ReactMarkdown>
      </div>
    </div>
  )
}
