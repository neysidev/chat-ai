import Image from "next/image"
import { GPTS, SECTIONS } from "@/fixtures/explore"

export default function Categories() {
  return (
    <section className="pt-8 space-y-8">
      {SECTIONS.map(section => (
        <section key={section.value} className="space-y-2">
          <header>
            <h2 className="text-xl font-medium">{section.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              {section.description}
            </p>
          </header>
          <ul className="grid sm:grid-cols-2 gap-2">
            {GPTS[section.value].map((gpt, index) => (
              <li
                key={index}
                className="rounded-xl min-h-32 p-4 flex items-center select-none cursor-pointer space-x-2 border dark:border-neutral-800 transition hover:border-transparent hover:bg-white dark:hover:bg-neutral-800 hover:shadow-sm"
              >
                <div className="transition-all w-1/4 md:w-1/3 grid place-items-center">
                  <Image
                    width={64}
                    height={64}
                    src={`/gpts/${gpt.image}`}
                    alt={gpt.title}
                    className="rounded-full border border-neutral-200"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{gpt.title}</h3>
                  <p className="text-xs line-clamp-2 mb-2">{gpt.description}</p>
                  <span className="text-xs block text-neutral-600">
                    By {gpt.creator}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
