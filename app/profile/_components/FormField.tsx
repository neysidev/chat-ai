import clsx from "clsx"

interface BaseFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
}

interface InputFieldProps extends BaseFieldProps {
  as?: "input"
  value: string
  placeholder?: string
  maxLength?: number
  onChange: (value: string) => void
}

interface TextareaFieldProps extends BaseFieldProps {
  as: "textarea"
  value: string
  placeholder?: string
  maxLength?: number
  rows?: number
  onChange: (value: string) => void
}

type FormFieldProps = InputFieldProps | TextareaFieldProps

// Mirrors the Explore page search input: transparent bg, neutral border,
// blue focus ring, clean transition.
const baseInputClasses = clsx(
  "w-full rounded-xl border dark:border-neutral-800 py-2 px-3.5 text-sm",
  "bg-transparent",
  "transition focus:outline-none focus:ring-2 focus:ring-blue-600",
)

const errorInputClasses =
  "border-red-400 dark:border-red-500 focus:ring-red-400/40"

export default function FormField(props: FormFieldProps) {
  const { id, label, error, hint, required } = props

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-800 dark:text-neutral-200"
      >
        {label}
        {required && (
          <span
            className="ml-1 text-red-500 dark:text-red-400"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={id}
          value={props.value}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          rows={props.rows ?? 3}
          onChange={e => props.onChange(e.target.value)}
          className={clsx(
            baseInputClasses,
            "resize-none",
            error && errorInputClasses,
          )}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onChange={e => props.onChange(e.target.value)}
          className={clsx(baseInputClasses, error && errorInputClasses)}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          aria-invalid={!!error}
        />
      )}

      <div className="flex justify-end items-center">
        {hint && !error && (
          <p
            id={`${id}-hint`}
            className="text-xs flex-1 text-neutral-500 dark:text-neutral-400"
          >
            {hint}
          </p>
        )}

        {/* Character counter */}
        {"maxLength" in props && props.maxLength && (
          <p className="text-right text-xs text-neutral-400 dark:text-neutral-600">
            {props.value.length}/{props.maxLength}
          </p>
        )}
      </div>

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-500 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  )
}
