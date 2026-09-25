import OpenAI from "openai"

/**
 * Returns an OpenAI-compatible client configured for Groq Cloud.
 * Use only on the server (e.g. API routes); requires GROQ_API_KEY.
 * @see https://console.groq.com/docs/openai
 */
export function getGroqClient(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured")
  }
  const baseURL = process.env.GROQ_BASE_URL
  return new OpenAI({
    apiKey,
    baseURL,
  })
}
