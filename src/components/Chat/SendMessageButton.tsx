import { Icon, Tooltip } from "@/components/common"
import { useSubmitMessage } from "@/hooks"

export default function SendMessageButton() {
  const { submit } = useSubmitMessage()

  return (
    <Tooltip id="send" content="Send" place="top">
      <button
        onClick={submit}
        className="rounded-xl p-1.5 text-white bg-gradient-to-t from-purple-900 to-purple-600 dark:from-purple-700 dark:to-purple-400"
      >
        <Icon name="arrowUp" size={16} strokeWidth={2} />
      </button>
    </Tooltip>
  )
}
