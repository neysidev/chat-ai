"use client"

import Link from "next/link"

import { useChatStore } from "@/stores/chatStore"
import { PageWrapper } from "@/components/common"

export default function HistoryPage() {
  const { chats } = useChatStore()
  const orderedChats = [...chats].reverse()

  return (
    <PageWrapper>
      <div className="py-16">
        <header className="space-y-2 text-center sm:w-4/5 md:w-2/3 mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">History</h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            Your recent conversations. Click to continue where you left off.
          </p>
        </header>

        {orderedChats.length === 0 ? (
          <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
            <p className="font-medium">No conversations yet</p>
            <p className="text-sm mt-1">
              Start a new chat from home — it will appear here.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:underline"
            >
              Go to Home
            </Link>
          </div>
        ) : (
          <ul className="space-y-2">
            {orderedChats.map(chat => (
              <li key={chat.id}>
                <Link
                  href={`/chat/${chat.id}`}
                  className="block rounded-xl p-4 border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 transition hover:border-transparent hover:shadow-sm"
                >
                  <span className="font-medium line-clamp-1">
                    {chat.title || "New chat"}
                  </span>
                  <span className="text-xs text-neutral-500 mt-0.5 block">
                    {chat.messages.length} message
                    {chat.messages.length !== 1 ? "s" : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageWrapper>
  )
}
