import { File, FileType } from "@/stores/messageStore"
import { formatBytes } from "@/utils/format"
import Icon from "../common/Icon"

interface AttachmentProps {
  file: File
  onDelete: () => void
}

const icons: Record<string, FileType> = {
  // Image types
  "image/png": "image",
  "image/jpeg": "image",
  "image/jpg": "image",
  "image/gif": "image",
  "image/svg+xml": "image",

  // Document types
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

  // Archive types
  "application/zip": "archive",
  "application/x-rar-compressed": "archive",
  "application/x-7z-compressed": "archive",
  "application/x-tar": "archive",
  "application/gzip": "archive",

  // Audio types
  "audio/mpeg": "audio",
  "audio/ogg": "audio",
  "audio/wav": "audio",
  "audio/x-wav": "audio",

  // Video types
  "video/mp4": "video",
  "video/x-msvideo": "video",
  "video/x-matroska": "video",
  "video/quicktime": "video",

  // Other types
  "application/json": "code",
  "application/javascript": "code",
  "application/xml": "code",
  "text/html": "code",
}

export default function Attachment({ file, onDelete }: AttachmentProps) {
  return (
    <div className="border rounded-full flex space-x-1 items-center pl-1 pr-2 py-1 text-sm">
      <div className="w-8 h-8 bg-neutral-100 rounded-full grid place-items-center text-neutral-500">
        <Icon name={icons[file.type] || "attachment"} size={16} />
      </div>

      <div className="px-1 text-xs">
        <p className="max-w-24 truncate" title={file.name}>
          {file.name}
        </p>
        <p className="text-neutral-500">{formatBytes(file.size)}</p>
      </div>

      <button onClick={onDelete}>
        <Icon name="xCircle" size={20} className="text-red-500" />
      </button>
    </div>
  )
}
