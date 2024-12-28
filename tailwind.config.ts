import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 5s infinite linear",
        rotate360: "rotate360 0.75s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200px center" },
          "100%": { backgroundPosition: "200px center" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
