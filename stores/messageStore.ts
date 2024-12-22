import { create } from "zustand"

export interface File {
  type: string
  name: string
  size: number
  extension: string
}

interface MessageStore {
  file: File | null
  addFile: (file: File) => void
  deleteFile: () => void
}

export const useMessageStore = create<MessageStore>(set => ({
  file: null,
  addFile: file => set({ file }),
  deleteFile: () => set({ file: null }),
}))
