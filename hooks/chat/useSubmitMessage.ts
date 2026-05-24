import { useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"

/**
 * Returns a stable `submit` callback that sends the current prompt.
 * Used by both SendMessageButton (click) and PromptInput (Enter key) so the
 * logic lives in exactly one place.
 */
export function useSubmitMessage() {
  const router = useRouter()
  const pathname = usePathname()
  const { prompt, createNewChat, addMessage, setMessageLoading, setPrompt } =
    useChatStore()

  const submit = useCallback(() => {
    if (prompt.trim().length === 0) return

    const trimmed = prompt.trim()
    setPrompt("")

    const chatIdFromPath = pathname.startsWith("/chat/")
      ? pathname.split("/")[2]
      : null

    if (chatIdFromPath) {
      addMessage(chatIdFromPath, { role: "user", content: trimmed })
      setMessageLoading(chatIdFromPath, true)
    } else {
      const id = generateRandomId()
      createNewChat(id, trimmed, true, [{ role: "user", content: trimmed }])
      router.push(`/chat/${id}`)
    }
  }, [
    prompt,
    pathname,
    router,
    createNewChat,
    addMessage,
    setMessageLoading,
    setPrompt,
  ])

  return { submit }
}
