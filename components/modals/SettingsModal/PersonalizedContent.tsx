export default function PersonalizedContent() {
  return (
    <div className="space-y-3">
      <h4 className="font-medium">Memory</h4>
      <p className="text-neutral-600 text-xs">
        ChatGPT will become more helpful as you chat, picking up on details and
        preferences to tailor its responses to you.
      </p>
      <p className="text-neutral-600 text-xs">
        To understand what ChatGPT remembers or teach it something new, just
        chat with it:
      </p>
      <ul className="text-neutral-600 list-disc list-inside text-xs">
        <li>“Remember that I like concise responses.”</li>
        <li>“I just got a puppy!”</li>
        <li>“What do you remember about me?”</li>
        <li>“Where did we leave off on my last project?”</li>
      </ul>
    </div>
  )
}
