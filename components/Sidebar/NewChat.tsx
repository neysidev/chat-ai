import Link from "next/link"
import Tooltip from "../common/Tooltip"
import { useHotkeys } from "react-hotkeys-hook"
import { useRouter } from "next/navigation"
import Kbd from "../common/Kbd"

export default function NewChat() {
  const router = useRouter()

  useHotkeys("shift+n", () => router.push("/"))

  return (
    <Tooltip
      id="new-chat-tooltip"
      content={
        <div className="flex space-x-1 items-center">
          <span className="font-medium">New Chat</span>{" "}
          <span className="text-xs">
            <Kbd>shift</Kbd>+<Kbd>N</Kbd>
          </span>
        </div>
      }
      place="right"
    >
      <Link href="/" className="bg-white block rounded-xl shadow-sm border p-1">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          className="text-neutral-600"
        >
          <path
            d="M6 12H18"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18V6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </Tooltip>
  )
}
