import Image from "next/image"

export default function LoadingMessage() {
  return (
    <div className="flex space-x-2 items-center max-w-[90%] sm:max-w-[80%]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        className="rounded-full"
      />

      <span className="bg-gradient-to-r from-neutral-300 via-black to-neutral-300 bg-clip-text text-transparent animate-shine">
        Loading...
      </span>
    </div>
  )
}
