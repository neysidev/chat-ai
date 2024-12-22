import Image from "next/image"

export default function UserMessage({ children }: { children: string }) {
  return (
    <div className="flex space-x-2 items-start max-w-[80%] ml-auto">
      <div
        className="bg-neutral-200 border border-neutral-300 p-3 rounded-xl"
        dangerouslySetInnerHTML={{ __html: children }}
      />

      <Image
        src="/profile.png"
        alt="Profile"
        width={34}
        height={34}
        className="hidden sm:block rounded-full"
      />
    </div>
  )
}
