"use client"

import { useCallback, useEffect, useState } from "react"

const isClient = typeof window !== "undefined"

/**
 * SSR-safe localStorage hook. On the server or before mount, returns the
 * default value and no-ops on set/remove.
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [stored, setStored] = useState<T>(defaultValue)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isClient) return
    try {
      const raw = localStorage.getItem(key)
      setStored(raw != null ? (JSON.parse(raw) as T) : defaultValue)
    } catch {
      setStored(defaultValue)
    }
  }, [key, defaultValue, mounted])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (!isClient) return
      setStored(prev => {
        const next = value instanceof Function ? value(prev) : value
        try {
          localStorage.setItem(key, JSON.stringify(next))
        } catch {
          // quota or other errors
        }
        return next
      })
    },
    [key]
  )

  const removeValue = useCallback(() => {
    if (!isClient) return
    try {
      localStorage.removeItem(key)
    } catch {
      // ignore
    }
    setStored(defaultValue)
  }, [key, defaultValue])

  return [stored, setValue, removeValue]
}

/**
 * Read a value from localStorage once (SSR-safe). Returns defaultValue on server or when missing.
 */
export function getLocalStorageItem<T>(key: string, defaultValue: T): T {
  if (!isClient) return defaultValue
  try {
    const raw = localStorage.getItem(key)
    return raw != null ? (JSON.parse(raw) as T) : defaultValue
  } catch {
    return defaultValue
  }
}

/**
 * Write a value to localStorage (SSR-safe no-op on server).
 */
export function setLocalStorageItem<T>(key: string, value: T): void {
  if (!isClient) return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // quota or other errors
  }
}

/**
 * Remove an item from localStorage (SSR-safe no-op on server).
 */
export function removeLocalStorageItem(key: string): void {
  if (!isClient) return
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore
  }
}
