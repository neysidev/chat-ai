import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  title: {
    template: "%s | Chat AI",
    default: "Chat AI",
  },
  description: "Minimal, elegant, and effortless AI chat experience.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Chat AI",
  },
  themeColor: "#ffffff",
}
