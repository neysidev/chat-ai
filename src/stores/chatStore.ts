import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

export interface Chat {
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

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
}

const getStorage = () =>
  typeof window !== "undefined" ? localStorage : noopStorage

export const useChatStore = create<ChatStore>()(
  persist(
    set => ({
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
              ? {
                  ...chat,
                  isLoading: false,
                  messages: [...chat.messages, message],
                }
              : chat
          ),
        })),

      createNewChat: (id, title, isLoading, messages) =>
        set(state => ({
          chats: [...state.chats, { id, title, messages, isLoading }],
          activeChatId: id,
        })),
    }),
    {
      name: "chat-ai-chats",
      storage: createJSONStorage(() => getStorage()),
      partialize: state => ({
        chats: state.chats,
        activeChatId: state.activeChatId,
      }),
      skipHydration: true,
    }
  )
)
