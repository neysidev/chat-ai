import { usePromptsStore } from "@/stores/promptsStore"
import PromptItem from "./PromptItem"

export default function PromptsList() {
  const { prompts } = usePromptsStore()

  return (
    <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {prompts.map(({ text, icon }, index) => (
        <PromptItem key={index} text={text} icon={icon} />
      ))}
    </ul>
  )
}
