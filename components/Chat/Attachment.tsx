import { Box, Button, Flex } from "@chakra-ui/react"
import { File, FileType } from "@/stores/messageStore"
import { formatBytes } from "@/utils/format"
import Icon from "../common/Icon"

interface AttachmentProps {
  file: File
  onDelete: () => void
}

const icons: Record<string, FileType> = {
  "image/png": "image",
  "image/jpeg": "image",
  "image/jpg": "image",
  "image/gif": "image",
  "image/svg+xml": "image",
  "application/pdf": "document",
  "application/msword": "documentText",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "documentText",
  "application/vnd.ms-excel": "documentChart",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    "documentChart",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "documentText",
  "text/plain": "documentText",
  "application/zip": "archive",
  "application/x-rar-compressed": "archive",
  "application/x-7z-compressed": "archive",
  "application/x-tar": "archive",
  "application/gzip": "archive",
  "audio/mpeg": "audio",
  "audio/ogg": "audio",
  "audio/wav": "audio",
  "audio/x-wav": "audio",
  "video/mp4": "video",
  "video/x-msvideo": "video",
  "video/x-matroska": "video",
  "video/quicktime": "video",
  "application/json": "code",
  "application/javascript": "code",
  "application/xml": "code",
  "text/html": "code",
}

export default function Attachment({ file, onDelete }: AttachmentProps) {
  return (
    <Flex
      borderWidth="1px"
      borderColor="border"
      borderRadius="full"
      gap={1}
      alignItems="center"
      pl={1}
      pr={2}
      py={1}
      fontSize="sm"
    >
      <Flex
        w={8}
        h={8}
        bg="bg.muted"
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
        color="fg.muted"
      >
        <Icon name={icons[file.type] || "attachment"} size={16} />
      </Flex>

      <Box px={1} fontSize="xs">
        <Box as="p" maxW={24} truncate title={file.name}>
          {file.name}
        </Box>
        <Box as="p" color="fg.muted">
          {formatBytes(file.size)}
        </Box>
      </Box>

      <Button variant="ghost" size="sm" onClick={onDelete} color="red.500" _dark={{ color: "red.400" }} aria-label="Remove attachment">
        <Icon name="xCircle" size={20} />
      </Button>
    </Flex>
  )
}
