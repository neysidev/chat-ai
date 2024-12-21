import Image from "next/image"

interface GPTItemProps {
  title: string
  image: string
  description: string
  creator: string
}

export default function GptItem({
  title,
  image,
  description,
  creator,
}: GPTItemProps) {
  return (
    <li className="rounded-xl h-32 p-4 flex items-center select-none cursor-pointer space-x-2 border transition hover:border-transparent hover:bg-white hover:shadow-sm">
      <div className="w-1/3 grid place-items-center">
        <Image
          width={64}
          height={64}
          src={`/gpts/${image}`}
          alt={title}
          className="rounded-full border border-neutral-200"
        />
      </div>
      <div className="overflow-hidden w-2/3">
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-xs mb-2">{description}</p>
        <span className="text-xs block text-neutral-600">By {creator}</span>
      </div>
    </li>
  )
}
