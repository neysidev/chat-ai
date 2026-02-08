import clsx from "clsx"
import { useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"
import { usePromptsStore } from "@/stores/promptsStore"

interface PromptItemProps {
  text: string
  icon: React.ReactNode
}

export default function PromptItem({ text, icon }: PromptItemProps) {
  const router = useRouter()

  const { createNewChat } = useChatStore()
  const { isRefreshing } = usePromptsStore()

  const onClick = () => {
    const id = generateRandomId()
    createNewChat(id, text, true, [{ role: "user", content: text }])

    router.push(`/chat/${id}`)
  }

  return (
    <li
      title={text}
      onClick={onClick}
      className={clsx(
        "text-xs border dark:border-neutral-800 dark:text-neutral-400 rounded-xl p-4 space-y-2 md:space-y-6 flex flex-col font-medium select-none transition",
        isRefreshing
          ? "cursor-not-allowed"
          : "cursor-pointer hover:bg-white dark:hover:bg-neutral-800 hover:shadow-sm"
      )}
    >
      <span className="flex-1 line-clamp-2">{text}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-neutral-500 dark:text-neutral-400"
      >
        {icon}
      </svg>
    </li>
  )
}
