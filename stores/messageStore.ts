import { create } from "zustand"

export type FileType =
  | "image"
  | "video"
  | "audio"
  | "document"
  | "documentText"
  | "documentChart"
  | "archive"
  | "code"
  | "attachment"

export interface File {
  type: FileType
  name: string
  size: number
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
