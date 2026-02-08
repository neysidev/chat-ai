"use client"

import { Box } from "@chakra-ui/react"
import { FileType, useMessageStore } from "@/stores/messageStore"
import Attachment from "@/components/Chat/Attachment"
import Icon from "@/components/common/Icon"

export default function AddAttachment() {
  const { file, addFile, deleteFile } = useMessageStore()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0]

      const fileData = {
        type: uploadedFile.type as FileType,
        name: uploadedFile.name,
        size: uploadedFile.size,
      }

      addFile(fileData)
    }
  }

  return (
    <>
      {file ? (
        <Attachment file={file} onDelete={deleteFile} />
      ) : (
        <>
          <label htmlFor="add-attachment">
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              fontWeight="medium"
              color="fg.muted"
              cursor="pointer"
              userSelect="none"
              _hover={{ color: "fg" }}
            >
              <Icon name="plus" size={20} />
              <Box as="span" display={{ base: "none", sm: "block" }}>
                Add Attachment
              </Box>
            </Box>
          </label>

          <input
            id="add-attachment"
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </>
      )}
    </>
  )
}
