export interface ChatMessage {
  role: "system" | "user" | "assistant"
  content: string
}

export interface SendChatOptions {
  messages: ChatMessage[]
  model?: string
  max_tokens?: number
  temperature?: number
}

export interface ChatCompletionResult {
  id: string
  content: string
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}
