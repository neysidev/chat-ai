import { useSettingsStore } from "@/stores/settingsStore"
import GeneralContent from "./GeneralContent"
import PersonalizedContent from "./PersonalizedContent"
import DataControlsContent from "./DataControlsContent"
import SecurityContent from "./SecurityContent"
import SpeechContent from "./SpeechContent"

const contents = {
  general: GeneralContent,
  personalized: PersonalizedContent,
  speech: SpeechContent,
  dataControls: DataControlsContent,
  security: SecurityContent,
}

export default function Content() {
  const { activeTab } = useSettingsStore()
  const Component = contents[activeTab]

  return (
    <div className="w-[440px]">
      <Component />
    </div>
  )
}
