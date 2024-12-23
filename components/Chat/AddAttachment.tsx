"use client"

import FileBox from "@/components/Chat/FileBox"
import Icon from "@/components/common/Icon"
import { useMessageStore } from "@/stores/messageStore"

export default function AddAttachment() {
  const { file, addFile, deleteFile } = useMessageStore()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0]

      const fileData = {
        type: uploadedFile.type,
        name: uploadedFile.name,
        size: uploadedFile.size,
        extension: uploadedFile.name.split(".").pop() || "unknown",
      }

      addFile(fileData)
    }
  }

  return (
    <>
      {file ? (
        <FileBox file={file} onDelete={deleteFile} />
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
