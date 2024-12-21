import { create } from "zustand"

interface ExploreStore {
  activeTab: string
  setActiveTab: (id: string) => void
  search: string
  setSearch: (search: string) => void
}

export const useExploreStore = create<ExploreStore>(set => ({
  activeTab: "top-picks",
  setActiveTab: id => set({ activeTab: id }),

  search: "",
  setSearch: search => set({ search }),
}))
