import { create } from "zustand"

export interface Message {
  role: "user" | "assistant" | "system" // Message roles
  content: string // Message content
}

interface Chat {
  id: string // Unique chat ID
  messages: Message[] // Messages in the chat
  title: string // Chat title
}

interface ChatStore {
  chats: Chat[] // All chats as an array
  prompt: string // Chat prompt
  activeChatId: string | null // Currently active chat ID
  setPrompt: (prompt: string) => void
  setActiveChatId: (id: string) => void
  addMessage: (chatId: string, message: Message) => void
  createNewChat: (id: string, title: string) => void
}

export const useChatStore = create<ChatStore>(set => ({
  chats: [],
  activeChatId: null,

  prompt: "",
  setPrompt: prompt => set({ prompt }),

  // Set the active chat ID
  setActiveChatId: id => set({ activeChatId: id }),

  // Add a new message to a chat
  addMessage: (chatId, message) =>
    set(state => ({
      chats: state.chats.map(chat =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      ),
    })),

  // Create a new chat
  createNewChat: (id, title) =>
    set(state => ({
      chats: [...state.chats, { id, title, messages: [] }],
      activeChatId: id,
    })),
}))
