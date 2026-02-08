import Icon from "@/components/common/Icon"
import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import Tabs from "./Tabs"
import Content from "./Content"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  return (
    <DialogRoot open={isOpen} onOpenChange={e => !e.open && onClose()}>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent
          minW={96}
          borderRadius="xl"
          bg="bg.panel"
          divideY="1px"
          divideColor="border"
        >
          <DialogHeader px={5} py={4} display="flex" alignItems="center" justifyContent="space-between">
            <DialogTitle fontWeight="bold" color="fg">
              Settings
            </DialogTitle>
            <DialogCloseTrigger asChild>
              <Box
                as="button"
                p={2}
                borderRadius="full"
                _hover={{ bg: "bg.muted" }}
              >
                <Icon name="xMark" size={18} />
              </Box>
            </DialogCloseTrigger>
          </DialogHeader>

          <Box px={5} py={4} display="flex" fontSize="sm" gap={6}>
            <Tabs />
            <Content />
          </Box>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  )
}
