import { create } from "zustand"

interface SettingsStore {
  activeTab: string
  setActiveTab: (id: string) => void
}

export const useSettingsStore = create<SettingsStore>(set => ({
  activeTab: "general",
  setActiveTab: id => set({ activeTab: id }),
}))
