import { useRouter } from "next/navigation"
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
} from "@chakra-ui/react"
import { Icon } from "@/components/common"
import { Box, Input } from "@chakra-ui/react"

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
    <DialogRoot open={isOpen} onOpenChange={e => !e.open && onClose()}>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent
          minW={{ base: "auto", sm: "500px" }}
          borderRadius="xl"
          bg="bg.panel"
          divideY="1px"
          divideColor="border"
        >
          <DialogHeader px={5} py={4} display="flex" alignItems="center" justifyContent="space-between">
            <Input
              placeholder="Search chats..."
              variant="flushed"
              flex={1}
              border="none"
              _focus={{ outline: "none" }}
            />
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

          <DialogBody px={3} py={4} fontSize="sm" gap={2}>
            <Box
              as="button"
              onClick={handleNewChat}
              display="flex"
              alignItems="center"
              fontWeight="medium"
              color="fg.muted"
              w="full"
              gap={2}
              p={2}
              borderRadius="lg"
              _hover={{ bg: "bg.muted" }}
            >
              <Icon name="plus" size={22} />
              <Box as="span" lineClamp={1} textAlign="left">
                New chat
              </Box>
            </Box>

            <Box gap={2} fontWeight="medium">
              <Box as="h4" px={3} py={2}>
                Yesterday
              </Box>
              {[
                "Mastering React State: Tips and Tricks",
                "Top Productivity Hacks for Developers",
                "Exploring the World of Open Source Projects",
                "How to Build a Personal Brand as a Coder",
              ].map(title => (
                <Box
                  key={title}
                  as="button"
                  display="flex"
                  alignItems="center"
                  w="full"
                  color="fg.muted"
                  gap={2}
                  p={2}
                  borderRadius="lg"
                  _hover={{ bg: "bg.muted" }}
                >
                  <Icon name="chat" size={22} />
                  <Box as="span" lineClamp={1} textAlign="left">
                    {title}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box gap={2} fontWeight="medium">
              <Box as="h4" px={3} py={2}>
                Previous 7 Days
              </Box>
              {[
                "AI in Web Development: The Future is Here",
                "Balancing Work and Life in Tech Careers",
              ].map(title => (
                <Box
                  key={title}
                  as="button"
                  display="flex"
                  alignItems="center"
                  w="full"
                  color="fg.muted"
                  gap={2}
                  p={2}
                  borderRadius="lg"
                  _hover={{ bg: "bg.muted" }}
                >
                  <Icon name="chat" size={22} />
                  <Box as="span" lineClamp={1} textAlign="left">
                    {title}
                  </Box>
                </Box>
              ))}
            </Box>
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  )
}
