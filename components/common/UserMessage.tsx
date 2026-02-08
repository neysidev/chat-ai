import Image from "next/image"

export default function UserMessage({ children }: { children: string }) {
  return (
    <div className="flex space-x-2 items-start max-w-[80%] ml-auto">
      <div
        className="bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 p-3 rounded-xl transition-colors duration-200"
        dangerouslySetInnerHTML={{ __html: children }}
      />

      <Image
        src="/profile.jpg"
        alt="Profile"
        width={34}
        height={34}
        className="hidden sm:block rounded-full"
      />
    </div>
  )
}
