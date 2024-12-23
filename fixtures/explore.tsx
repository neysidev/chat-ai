export const TABS = [
  { label: "Top Picks", value: "top-picks" },
  { label: "Writing", value: "writing" },
  { label: "Productivity", value: "productivity" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Programming", value: "programming" },
]

export const GPTS = {
  trending: [
    {
      title: "Image Generator",
      image: "image-generator.png",
      creator: "nafi",
      description:
        "A GPT specialized in generating and refining images with a mix of professional and friendly tone.",
    },
    {
      title: "Write For Me",
      image: "write-for-me.png",
      creator: "puzzle.today",
      description:
        "Write tailored, engaging content with a focus on quality, relevance and precise word count.",
    },
    {
      title: "Canva",
      image: "canva.png",
      creator: "canva.com",
      description:
        "Effortlessly design anything: presentations, logos, social media posts and more.",
    },
    {
      title: "Logo Creator",
      image: "logo-creator.png",
      creator: "community builder",
      description:
        "Use me to generate professional logo designs and app icons!",
    },
  ],
  writing: [
    {
      title: "Write For Me",
      image: "write-for-me.png",
      creator: "puzzle.today",
      description:
        "Write tailored, engaging content with a focus on quality, relevance and precise word count.",
    },
    {
      title: "AI Humanizer",
      image: "ai-humanizer.png",
      creator: "mmchdigital.solutions",
      description:
        "This GPT humanizes AI-generated text with maintaining content meaning and quality.",
    },
    {
      title: "Humanize AI",
      image: "humanize-ai.png",
      creator: "gptinf.com",
      description:
        "Humanize your AI-generated content with Free credits available.",
    },
    {
      title: "CV Writer - the CV Expert",
      image: "cw-writer.png",
      creator: "Curtis Fogelberg",
      description:
        "An expert in crafting personalised, professional and humanized CVs optimised for ATS.",
    },
  ],
  productivity: [
    {
      title: "Canva",
      image: "canva.png",
      creator: "canva.com",
      description:
        "Effortlessly design anything: presentations, logos, social media posts and more.",
    },
    {
      title: "Image Generator Pro",
      image: "image-generator-pro.png",
      creator: "pulsr.co.uk",
      description: "The worlds most powerful image generator.",
    },
    {
      title: "PowerPoints & PDFs",
      image: "powerpoints-pdfs.png",
      creator: "slidesgpt.com",
      description:
        "Make PowerPoints with a Slides AI PowerPoint Generator. Save as PPT, Google Slides and PDF.",
    },
    {
      title: "AI PDF Drive",
      image: "ai-pdf-drive.png",
      creator: "myaidrive.com",
      description:
        "Upload and chat with all your files, create polished PDFs right from the GPT.",
    },
  ],
  education: [
    {
      title: "Write Anything",
      image: "write-anything.png",
      creator: "pulsr.co.uk",
      description: "The world's most powerful writing tool.",
    },
    {
      title: "Universal Primer",
      image: "universal-primer.png",
      creator: "Siqi Chen",
      description: "The fastest way to learn anything hard.",
    },
    {
      title: "Code Tutor",
      image: "code-tutor.png",
      creator: "khanacademy.org",
      description: "Let's code together! I'm Khanmigo Lite, by Khan Academy.",
    },
    {
      title: "Voxscript",
      image: "voxscript.png",
      creator: "Allwire Technologies, LLC",
      description: "Quick YouTube, US equity data, and web page summarization.",
    },
  ],
  lifestyle: [
    {
      title: "Mia AI, your AI Life Coach",
      image: "mia-ai.png",
      creator: "heymia.ai",
      description:
        "Coach. Friend. Part-time fortune teller. Just say hi. +700,000 Conversations!",
    },
    {
      title: "DeepGame",
      image: "deepgame.png",
      creator: "Utile Labs",
      description: "Play any story as a character. You decide what to do next.",
    },
    {
      title: "Travel Guide",
      image: "travel-guide.png",
      creator: "capchair.com",
      description:
        "Expert on global travel destinations, trip planning, budget building, and exploring the world.",
    },
    {
      title: "Song Maker",
      image: "song-maker.png",
      creator: "@CustomizedGPTs",
      description:
        "Create music using musical theory. Discover essential songwriting tips to compose music and create songs.",
    },
  ],
  programming: [
    {
      title: "Code Copilot",
      image: "code-copilot.png",
      creator: "promptspellsmith.com",
      description:
        "Code Smarter, Build Faster—With the Expertise of a 10x Programmer by Your Side.",
    },
    {
      title: "Website Generator",
      image: "website-generator.png",
      creator: "websitegenerator.b12.io",
      description:
        "Generate, design, write code, and write copy for your website.",
    },
    {
      title: "SQL Expert",
      image: "sql-expert.png",
      creator: "Dmitry Khanukov",
      description: "SQL expert for optimization and queries.",
    },
    {
      title: "Code GPT",
      image: "code-gpt.png",
      creator: "pulsr.co.uk",
      description: "The worlds most powerful coding assistant.",
    },
  ],
}
export const tabIds = TABS.map(tab => tab.value)
export type GptTypes = keyof typeof GPTS

type Section = {
  title: string
  value: GptTypes
  description: string
}

export const SECTIONS: Section[] = [
  {
    title: "Trending",
    value: "trending",
    description: "Most popular GPTs by our community",
  },
  {
    title: "Productivity",
    value: "productivity",
    description: "Increase your efficiency",
  },
  {
    title: "Education",
    value: "education",
    description: "Explore new ideas, revisit existing skills",
  },
  {
    title: "Lifestyle",
    value: "lifestyle",
    description: "Get tips on travel, workouts, style, food, and more",
  },
  {
    title: "Programming",
    value: "programming",
    description: "Write code, debug, test, and learn",
  },
]
