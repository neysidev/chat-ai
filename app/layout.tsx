import clsx from "clsx"
import { Open_Sans } from "next/font/google"
import { FC, PropsWithChildren } from "react"

import { Layout } from "@/components/common"
import { siteMetadata } from "@/data/siteMetaData"
import { Providers } from "./providers"

import "@/styles/globals.css"

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] })
export const metadata = siteMetadata

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          openSans.variable,
          "antialiased bg-neutral-100 dark:bg-neutral-900 transition-colors duration-200"
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
