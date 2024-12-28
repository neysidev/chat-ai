import { create } from "zustand"

export type SettingsTab =
  | "general"
  | "personalized"
  | "speech"
  | "dataControls"
  | "security"

interface SettingsStore {
  activeTab: SettingsTab
  setActiveTab: (tab: SettingsTab) => void
}

export const useSettingsStore = create<SettingsStore>(set => ({
  activeTab: "general",
  setActiveTab: tab => set({ activeTab: tab }),
}))
