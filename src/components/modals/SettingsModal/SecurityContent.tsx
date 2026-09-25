export default function SecurityContent() {
  return (
    <ul className="divide-y dark:divide-neutral-700">
      <li className="py-3 pt-0 space-x-8 flex items-start justify-between">
        <div className="space-y-2">
          <h4>Multi-factor authentication</h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Require an extra security challenge when logging in. If you are
            unable to pass this challenge, you will have the option to recover
            your account via email.
          </p>
        </div>
        <button className="border px-3 py-1.5 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
          Enable
        </button>
      </li>
      <li className="py-3 flex space-x-8 items-start justify-between">
        <div className="space-y-2">
          <h4>Log out of all devices</h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Log out of all active sessions across all devices, including your
            current session. It may take up to 30 minutes for other devices to
            be logged out.
          </p>
        </div>

        <button className="border min-w-[100px] px-3 py-1.5 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
          Log out all
        </button>
      </li>
    </ul>
  )
}
