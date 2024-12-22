import { File } from "@/stores/messageStore"
import Icon from "./Icon"
import { formatBytes } from "@/utils/format"

interface FileBoxProps {
  file: File
  onDelete: () => void
}

const icons: Record<string, string> = {
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
  "application/vnd.ms-powerpoint": "powerpoint",
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

const extensions: Record<string, string> = {
  // Image types
  "image/png": ".png",
  "image/jpeg": ".jpeg",
  "image/jpg": ".jpg",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",

  // Document types
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    ".pptx",
  "text/plain": ".txt",

  // Archive types
  "application/zip": ".zip",
  "application/x-rar-compressed": ".rar",
  "application/x-7z-compressed": ".7z",
  "application/x-tar": ".tar",
  "application/gzip": ".gz",

  // Audio types
  "audio/mpeg": ".mp3",
  "audio/ogg": ".ogg",
  "audio/wav": ".wav",
  "audio/x-wav": ".wav",

  // Video types
  "video/mp4": ".mp4",
  "video/x-msvideo": ".avi",
  "video/x-matroska": ".mkv",
  "video/quicktime": ".mov",

  // Other types
  "application/json": ".json",
  "application/javascript": ".js",
  "application/xml": ".xml",
  "text/html": ".html",
}

export default function FileBox({ file, onDelete }: FileBoxProps) {
  return (
    <div className="border rounded-full flex space-x-2 items-center pl-1 pr-2 py-1 text-sm">
      <div className="w-10 h-10 bg-neutral-100 rounded-full grid place-items-center text-neutral-500">
        <Icon name={icons[file.type] || "attachment"} size={18} />
      </div>
      <div className="px-1">
        <p className="truncate text-ellipsis">{file.name}</p>
        <p className="text-xs text-neutral-500">
          {extensions[file.type] || ".unknown"} | {formatBytes(file.size)}
        </p>
      </div>
      <button onClick={onDelete}>
        <Icon name="xCircle" size={20} className="text-red-500" />
      </button>
    </div>
  )
}
