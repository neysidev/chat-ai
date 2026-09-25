export interface UserProfile {
  displayName: string
  role: string
  bio: string
  avatarUrl?: string
}

export const DEFAULT_PROFILE: UserProfile = {
  displayName: "Mety",
  role: "",
  bio: "",
}

export interface ProfileValidationErrors {
  displayName?: string
  role?: string
  bio?: string
}

export function validateProfile(
  profile: UserProfile
): ProfileValidationErrors {
  const errors: ProfileValidationErrors = {}

  if (!profile.displayName.trim()) {
    errors.displayName = "Display name is required."
  } else if (profile.displayName.trim().length > 50) {
    errors.displayName = "Display name must be 50 characters or less."
  }

  if (profile.role.length > 60) {
    errors.role = "Role must be 60 characters or less."
  }

  if (profile.bio.length > 200) {
    errors.bio = "Bio must be 200 characters or less."
  }

  return errors
}
