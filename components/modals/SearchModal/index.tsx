import { useRouter } from "next/navigation"
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react"
import { Icon } from "@/components/common"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter()

  const handleNewChat = () => {
    router.push("/")
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      as="div"
      transition
      className="fixed z-20 inset-0 flex w-screen items-center justify-center bg-black/50 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      onClose={onClose}
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-2">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="sm:min-w-[500px] divide-y bg-white rounded-xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <header className="px-5 py-4 flex items-center justify-between">
              <input
                placeholder="Search chats..."
                className="w-full focus:outline-none"
              />
              <CloseButton className="p-2 rounded-full transition hover:bg-neutral-200">
                <Icon name="xMark" size={18} />
              </CloseButton>
            </header>

            <div className="px-3 py-4 text-sm space-y-2">
              <button
                onClick={handleNewChat}
                className="flex items-center font-medium text-neutral-600 w-full space-x-2 p-2 transition rounded-lg hover:bg-neutral-100"
              >
                <Icon name="plus" size={22} />
                <span className="line-clamp-1 text-left">New chat</span>
              </button>

              <div className="space-y-2 font-medium">
                <h4 className="px-3 py-2">Yesterday</h4>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    Mastering React State: Tips and Tricks
                  </span>
                </button>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    Top Productivity Hacks for Developers
                  </span>
                </button>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    Exploring the World of Open Source Projects
                  </span>
                </button>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    How to Build a Personal Brand as a Coder
                  </span>
                </button>
              </div>

              <div className="space-y-2 font-medium">
                <h4 className="px-3 py-2">Previous 7 Days</h4>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    AI in Web Development: The Future is Here
                  </span>
                </button>
                <button className="flex items-center w-full text-neutral-600 space-x-2 p-2 transition rounded-lg hover:bg-neutral-100">
                  <Icon name="chat" size={22} />
                  <span className="line-clamp-1 text-left">
                    Balancing Work and Life in Tech Careers
                  </span>
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
