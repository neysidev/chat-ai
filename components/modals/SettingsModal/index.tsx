import Icon from "@/components/common/Icon"
import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import Tabs from "./Tabs"
import Content from "./Content"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      transition
      className="fixed inset-0 flex w-screen z-10 items-center justify-center bg-black/50 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      onClose={onClose}
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="min-w-96 divide-y bg-white rounded-xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <header className="px-5 py-4 flex items-center justify-between">
              <DialogTitle as="h3" className="font-bold">
                Settings
              </DialogTitle>
              <CloseButton className="p-2 rounded-full transition hover:bg-neutral-200">
                <Icon name="xMark" size={18} />
              </CloseButton>
            </header>

            <div className="px-5 py-4 flex text-sm space-x-6">
              <Tabs />
              <Content />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
