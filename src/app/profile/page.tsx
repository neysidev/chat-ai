import type { Metadata } from "next"

import { PageWrapper } from "@/components/common"
import ProfileForm from "./_components/ProfileForm"

export const metadata: Metadata = {
  title: "Profile",
}

export default function ProfilePage() {
  return (
    <PageWrapper>
      <div className="py-16 space-y-8">

        {/* Header — identical structure to the Explore page */}
        <header className="transition-all space-y-2 text-center sm:w-4/5 md:w-2/3 mx-auto">
          <h1 className="transition-all text-3xl md:text-4xl font-semibold">
            Profile
          </h1>
          <p className="transition-all text-sm md:text-base text-neutral-600 dark:text-neutral-400">
            Personalize your experience.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Changes are saved locally in your browser.
          </p>
        </header>

        {/* Form card — one width step wider than before */}
        <div className="sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 shadow-sm">
            <ProfileForm />
          </div>
        </div>

      </div>
    </PageWrapper>
  )
}
