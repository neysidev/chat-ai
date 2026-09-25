import { create } from "zustand"
import { Prompt, PROMPTS, PROMPTS_COUNT } from "@/fixtures/prompts"

interface PromptsStore {
  isRefreshing: boolean
  startRefreshing: () => void
  stopRefreshing: () => void

  prompts: Prompt[]
  setPrompts: (prompts: Prompt[]) => void
}

export const usePromptsStore = create<PromptsStore>(set => ({
  isRefreshing: false,
  startRefreshing: () => set({ isRefreshing: true }),
  stopRefreshing: () => set({ isRefreshing: false }),

  prompts: PROMPTS.slice(0, PROMPTS_COUNT),
  setPrompts: prompts => set({ prompts }),
}))
