import { create } from "zustand"

export interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

interface Chat {
  id: string
  title: string
  isLoading: boolean
  messages: Message[]
}

interface ChatStore {
  activeChatId: string | null
  chats: Chat[]
  prompt: string
  addMessage: (chatId: string, message: Message) => void
  createNewChat: (
    id: string,
    title: string,
    isLoading: boolean,
    messages: Message[]
  ) => void
  setActiveChatId: (id: string) => void
  setMessageLoading: (chatId: string, isLoading: boolean) => void
  setPrompt: (prompt: string) => void
}

export const useChatStore = create<ChatStore>(set => ({
  chats: [],
  activeChatId: null,

  prompt: "",
  setPrompt: prompt => set({ prompt }),

  setActiveChatId: id => set({ activeChatId: id }),
  setMessageLoading: (chatId, isLoading) =>
    set(state => ({
      chats: state.chats.map(chat =>
        chat.id === chatId ? { ...chat, isLoading } : chat
      ),
    })),

  addMessage: (chatId, message) =>
    set(state => ({
      chats: state.chats.map(chat =>
        chat.id === chatId
          ? { ...chat, isLoading: false, messages: [...chat.messages, message] }
          : chat
      ),
    })),

  createNewChat: (id, title, isLoading, messages) =>
    set(state => ({
      chats: [...state.chats, { id, title, messages, isLoading }],
      activeChatId: id,
    })),
}))
