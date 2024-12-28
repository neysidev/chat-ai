"use client"

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
          <label
            htmlFor="add-attachment"
            className="flex items-center space-x-1 font-medium text-neutral-600 transition-colors select-none hover:text-neutral-800 cursor-pointer"
          >
            <Icon name="plus" size={20} />
            <span className="hidden sm:block">Add Attachment</span>
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
