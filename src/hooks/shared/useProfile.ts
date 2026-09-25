"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import {
  DEFAULT_PROFILE,
  UserProfile,
  ProfileValidationErrors,
  validateProfile,
} from "@/types/profile"
import { useLocalStorage } from "./useLocalStorage"

const PROFILE_STORAGE_KEY = "chat-ai-profile"

type SaveStatus = "idle" | "saved" | "error"

interface UseProfileReturn {
  /** The currently persisted profile (restored from localStorage on mount) */
  profile: UserProfile
  /** Draft form values — updated as the user types */
  draft: UserProfile
  /** Per-field validation errors */
  errors: ProfileValidationErrors
  /** Whether the form fields have unsaved changes */
  isDirty: boolean
  /** Visual save feedback status */
  saveStatus: SaveStatus
  /** True while waiting for localStorage to hydrate on first render */
  isLoading: boolean
  /** Update a single draft field */
  setField: <K extends keyof UserProfile>(field: K, value: UserProfile[K]) => void
  /** Validate and persist the draft; returns true on success */
  save: () => boolean
  /** Discard draft changes and revert to last saved profile */
  reset: () => void
  /** Immediately persist a new avatar URL without affecting the draft flow */
  uploadAvatar: (dataUrl: string) => void
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useLocalStorage<UserProfile>(
    PROFILE_STORAGE_KEY,
    DEFAULT_PROFILE
  )

  const [draft, setDraft] = useState<UserProfile>(DEFAULT_PROFILE)
  const [errors, setErrors] = useState<ProfileValidationErrors>({})
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")
  const [isLoading, setIsLoading] = useState(true)

  // useLocalStorage hydrates across two render cycles (set mounted → read
  // storage). The ref guard ensures we sync the draft only once — right after
  // the real stored value lands, not while it's still the default.
  const initialSyncDone = useRef(false)

  useEffect(() => {
    if (initialSyncDone.current) return
    initialSyncDone.current = true
    setDraft(profile)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  // Auto-dismiss "saved" banner after 2.5 s
  useEffect(() => {
    if (saveStatus !== "saved") return
    const id = setTimeout(() => setSaveStatus("idle"), 2500)
    return () => clearTimeout(id)
  }, [saveStatus])

  // Dirty check excludes avatarUrl — image uploads are applied immediately
  const isDirty = (() => {
    const { avatarUrl: _a, ...draftFields } = draft
    const { avatarUrl: _b, ...profileFields } = profile
    return JSON.stringify(draftFields) !== JSON.stringify(profileFields)
  })()

  const setField = useCallback(
    <K extends keyof UserProfile>(field: K, value: UserProfile[K]) => {
      setDraft(prev => ({ ...prev, [field]: value }))
      setErrors(prev => {
        if (!prev[field as keyof ProfileValidationErrors]) return prev
        const next = { ...prev }
        delete next[field as keyof ProfileValidationErrors]
        return next
      })
    },
    []
  )

  const save = useCallback((): boolean => {
    const trimmed: UserProfile = {
      ...draft,
      displayName: draft.displayName.trim(),
      role: draft.role.trim(),
      bio: draft.bio.trim(),
    }
    const validationErrors = validateProfile(trimmed)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSaveStatus("error")
      return false
    }

    try {
      setProfile(trimmed)
      setDraft(trimmed)
      setErrors({})
      setSaveStatus("saved")
      return true
    } catch {
      setSaveStatus("error")
      return false
    }
  }, [draft, setProfile])

  const reset = useCallback(() => {
    setDraft(profile)
    setErrors({})
    setSaveStatus("idle")
  }, [profile])

  const uploadAvatar = useCallback(
    (dataUrl: string) => {
      // Persist directly — bypass the draft/save flow so the image is applied
      // immediately without requiring "Save Changes".
      const updated: UserProfile = { ...profile, avatarUrl: dataUrl }
      setProfile(updated)
      setDraft(prev => ({ ...prev, avatarUrl: dataUrl }))
    },
    [profile, setProfile]
  )

  return {
    profile,
    draft,
    errors,
    isDirty,
    saveStatus,
    isLoading,
    setField,
    save,
    reset,
    uploadAvatar,
  }
}
