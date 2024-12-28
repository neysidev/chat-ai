import Header from "./Header"
import Prompts from "./Prompts"

export default function Container() {
  return (
    <div className="w-full flex-1 mb-8 flex flex-col justify-center">
      <Header />
      <Prompts />
    </div>
  )
}
