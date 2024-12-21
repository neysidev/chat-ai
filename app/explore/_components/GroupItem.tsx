import { GPTS, GptTypes } from "@/fixtures/explore"
import GptItem from "./GptItem"

interface GroupItemProps {
  title: string
  description: string
  value: GptTypes
}

export default function GroupItem({
  title,
  description,
  value,
}: GroupItemProps) {
  return (
    <section
      id={value === "trending" ? "top-picks" : value}
      className="space-y-2"
    >
      <header>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-neutral-600">{description}</p>
      </header>
      <ul className="grid sm:grid-cols-2 gap-2">
        {GPTS[value].map((gpt, index) => (
          <GptItem key={index} {...gpt} />
        ))}
      </ul>
    </section>
  )
}
