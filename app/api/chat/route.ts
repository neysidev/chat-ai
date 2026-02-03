import { NextResponse } from "next/server"
import { getGroqClient } from "@/lib/groq"

export interface ChatMessage {
  role: "system" | "user" | "assistant"
  content: string
}

export interface ChatCompletionRequest {
  messages: ChatMessage[]
  model?: string
  stream?: boolean
  max_tokens?: number
  temperature?: number
}

export interface ChatCompletionResponse {
  id: string
  choices: Array<{
    index: number
    message: { role: string; content: string | null }
    finish_reason: string
  }>
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export async function POST(request: Request) {
  let client: ReturnType<typeof getGroqClient>
  try {
    client = getGroqClient()
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "GROQ_API_KEY is not configured"
    return NextResponse.json({ error: message }, { status: 500 })
  }

  let body: ChatCompletionRequest
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const {
    messages,
    model = "llama-3.3-70b-versatile",
    stream = false,
    max_tokens,
    temperature,
  } = body

  if (!messages?.length) {
    return NextResponse.json(
      { error: "messages array is required and must not be empty" },
      { status: 400 }
    )
  }

  try {
    const completion = await client.chat.completions.create({
      model,
      messages: messages as Parameters<
        typeof client.chat.completions.create
      >[0]["messages"],
      stream,
      ...(max_tokens != null && { max_tokens }),
      ...(temperature != null && { temperature }),
    })

    return NextResponse.json(completion as unknown as ChatCompletionResponse)
  } catch (err) {
    const rawMessage =
      err instanceof Error ? err.message : "Chat request failed"
    const status =
      err && typeof err === "object" && "status" in err
        ? (err.status as number)
        : 502
    const message =
      status === 402 || /insufficient balance/i.test(rawMessage)
        ? "Insufficient balance. Add credits at https://console.groq.com"
        : rawMessage
    return NextResponse.json({ error: message }, { status })
  }
}
