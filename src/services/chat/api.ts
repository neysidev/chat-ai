import type { SendChatOptions, ChatCompletionResult } from "./types"

export async function sendChatCompletion(
  options: SendChatOptions
): Promise<ChatCompletionResult> {
  const {
    messages,
    model = "llama-3.3-70b-versatile",
    max_tokens,
    temperature,
  } = options

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages,
      model,
      stream: false,
      ...(max_tokens != null && { max_tokens }),
      ...(temperature != null && { temperature }),
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    const message =
      typeof data?.error === "string" ? data.error : "Chat request failed"
    throw new Error(message)
  }

  const content = data.choices?.[0]?.message?.content ?? ""
  return {
    id: data.id,
    content,
    usage: data.usage,
  }
}
