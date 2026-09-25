import { create } from "zustand"

interface ExploreStore {
  search: string
  setSearch: (search: string) => void
}

export const useExploreStore = create<ExploreStore>(set => ({
  search: "",
  setSearch: search => set({ search }),
}))
