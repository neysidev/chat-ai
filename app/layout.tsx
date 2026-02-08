import { Open_Sans } from "next/font/google"
import { FC, PropsWithChildren } from "react"

import { Layout } from "@/components/common"
import { siteMetadata } from "@/data/siteMetaData"
import { Provider } from "@/components/ui/provider"

import "@/styles/globals.css"

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] })
export const metadata = siteMetadata

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.variable}>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
