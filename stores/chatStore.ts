import { create } from "zustand"

interface Message {
  role: "user" | "assistant" | "system" // Message roles
  content: string // Message content
}

interface Chat {
  messages: Message[] // Messages in the chat
  title: string // Chat title
}

interface ChatStore {
  chats: Record<string, Chat> // All chats indexed by chat ID
  activeChatId: string | null // Currently active chat ID
  setActiveChatId: (id: string) => void
  addMessage: (chatId: string, message: Message) => void
  createNewChat: (id: string, title: string) => void
  fetchChatCompletion: (chatId: string, apiKey: string) => Promise<void> // Fetch completion from OpenAI API
}

export const useChatStore = create<ChatStore>(set => ({
  chats: {},
  activeChatId: null,

  // Set the active chat ID
  setActiveChatId: id => set({ activeChatId: id }),

  // Add a new message to a chat
  addMessage: (chatId, message) =>
    set(state => ({
      chats: {
        ...state.chats,
        [chatId]: {
          ...state.chats[chatId],
          messages: [...(state.chats[chatId]?.messages || []), message],
        },
      },
    })),

  // Create a new chat
  createNewChat: (id, title) =>
    set(state => ({
      chats: {
        ...state.chats,
        [id]: { messages: [], title },
      },
      activeChatId: id,
    })),

  // Fetch a chat completion from OpenAI API
  fetchChatCompletion: async chatId => {
    const state = useChatStore.getState() // Get the current state
    const chat = state.chats[chatId]

    if (!chat) throw new Error("Chat not found")

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo", // OpenAI GPT model (change as needed)
            messages: chat.messages, // Pass the current chat's messages
            max_tokens: 150, // Limit on the number of tokens for the assistant's reply
            temperature: 0.7, // Controls randomness: higher values mean more random
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`)
      }

      const data = await response.json()

      // Check if the assistant's message is available
      const assistantMessage = data.choices[0]?.message?.content

      if (assistantMessage) {
        // Add the assistant's response to the chat
        set(state => ({
          chats: {
            ...state.chats,
            [chatId]: {
              ...state.chats[chatId],
              messages: [
                ...state.chats[chatId].messages,
                { role: "assistant", content: assistantMessage },
              ],
            },
          },
        }))
      } else {
        console.error("No response from assistant.")
      }
    } catch (error) {
      console.error("Error fetching chat completion:", error)
    }
  },
}))
