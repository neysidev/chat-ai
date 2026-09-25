"use client"

import { useRef, useState } from "react"
import clsx from "clsx"

import { useProfile } from "@/hooks"
import { resizeImageToDataUrl } from "@/utils/image"
import { Icon } from "@/components/common"
import FormField from "./FormField"
import ProfileAvatar from "./ProfileAvatar"

// ─── Sub-components ────────────────────────────────────────────────────────────

function SaveFeedback({ status }: { status: "idle" | "saved" | "error" }) {
  if (status === "idle") return null
  return (
    <span
      role="status"
      aria-live="polite"
      className={clsx(
        "text-sm font-medium",
        status === "saved"
          ? "text-green-600 dark:text-green-400"
          : "text-red-500 dark:text-red-400"
      )}
    >
      {status === "saved" ? "✓ Saved" : "Fix the errors above."}
    </span>
  )
}

function SkeletonField() {
  return (
    <div className="space-y-1.5">
      <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="h-9 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Loading profile">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-5 w-32 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>
      </div>
      <SkeletonField />
      <SkeletonField />
      <SkeletonField />
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function ProfileForm() {
  const {
    draft,
    errors,
    isDirty,
    saveStatus,
    isLoading,
    setField,
    save,
    reset,
    uploadAvatar,
  } = useProfile()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [avatarError, setAvatarError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleAvatarClick = () => {
    setAvatarError(null)
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    // Reset so the same file can be re-selected after an error
    e.target.value = ""
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setAvatarError("Please select an image file.")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setAvatarError("Image must be smaller than 5 MB.")
      return
    }

    try {
      setIsUploading(true)
      const dataUrl = await resizeImageToDataUrl(file, 200, 0.85)
      uploadAvatar(dataUrl)
      setAvatarError(null)
    } catch {
      setAvatarError("Failed to process image. Please try another file.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    save()
  }

  if (isLoading) return <LoadingSkeleton />

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-8">

        {/* ── Avatar upload ── */}
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0 group">
            <ProfileAvatar
              name={draft.displayName || "?"}
              src={draft.avatarUrl}
              size="lg"
            />

            {/* Upload overlay — appears on hover */}
            <button
              type="button"
              onClick={handleAvatarClick}
              disabled={isUploading}
              aria-label="Change profile photo"
              className={clsx(
                "absolute inset-0 rounded-full flex items-center justify-center",
                "bg-black/50 backdrop-blur-[1px]",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-200",
                "focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
                isUploading && "opacity-100 cursor-wait"
              )}
            >
              {isUploading ? (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3V4a10 10 0 100 10h-2a8 8 0 01-8-8z"
                  />
                </svg>
              ) : (
                <Icon name="image" size={20} className="text-white" strokeWidth={1.5} />
              )}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              tabIndex={-1}
              onChange={handleFileChange}
            />
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-base leading-snug text-neutral-900 dark:text-neutral-100 truncate">
              {draft.displayName || (
                <span className="text-neutral-400 dark:text-neutral-600 italic font-normal">
                  No name set
                </span>
              )}
            </p>
            {draft.role && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                {draft.role}
              </p>
            )}
            <button
              type="button"
              onClick={handleAvatarClick}
              disabled={isUploading}
              className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-150 disabled:opacity-50"
            >
              {isUploading ? "Uploading…" : "Change photo"}
            </button>
            {avatarError && (
              <p role="alert" className="mt-1 text-xs text-red-500 dark:text-red-400">
                {avatarError}
              </p>
            )}
          </div>
        </div>

        {/* ── Form fields ── */}
        <div className="space-y-5">
          <FormField
            id="displayName"
            label="Display Name"
            required
            value={draft.displayName}
            placeholder="How should we call you?"
            maxLength={50}
            error={errors.displayName}
            hint="Used in the greeting on the home page."
            onChange={val => setField("displayName", val)}
          />

          <FormField
            id="role"
            label="Role / Title"
            value={draft.role}
            placeholder="e.g. Software Engineer, Designer, Student…"
            maxLength={60}
            error={errors.role}
            hint="Helps the AI tailor responses to your context."
            onChange={val => setField("role", val)}
          />

          <FormField
            as="textarea"
            id="bio"
            label="About You"
            value={draft.bio}
            placeholder="A short note about yourself — the AI can use this as context."
            maxLength={200}
            rows={3}
            error={errors.bio}
            onChange={val => setField("bio", val)}
          />
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2 pt-1">
          {/* Primary — solid */}
          <button
            type="submit"
            disabled={!isDirty}
            className={clsx(
              "px-5 py-2 rounded-xl text-sm font-semibold",
              "bg-neutral-900 border border-transparent text-white dark:bg-white dark:text-neutral-900",
              "hover:bg-neutral-700 dark:hover:bg-neutral-200",
              "active:scale-[0.97]",
              "transition-all duration-150",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
            )}
          >
            Save Changes
          </button>

          {/* Secondary — ghost */}
          {isDirty && (
            <button
              type="button"
              onClick={reset}
              className={clsx(
                "px-4 py-2 rounded-xl text-sm font-medium",
                "border border-neutral-200 dark:border-neutral-700",
                "text-neutral-600 dark:text-neutral-400",
                "hover:border-neutral-400 dark:hover:border-neutral-500",
                "hover:text-neutral-900 dark:hover:text-neutral-200",
                "hover:bg-neutral-50 dark:hover:bg-neutral-800/60",
                "active:scale-[0.97]",
                "transition-all duration-150"
              )}
            >
              Discard
            </button>
          )}

          <SaveFeedback status={saveStatus} />
        </div>

      </div>
    </form>
  )
}
