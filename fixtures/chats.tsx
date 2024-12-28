import { Message } from "@/stores/chatStore"

export const maxLines = 5
export const maxLength = 1000

export const MESSAGES: Message[] = [
  {
    role: "user",
    content:
      "What are some effective strategies for optimizing front-end performance in React?",
  },
  {
    role: "system",
    content: `
Effective strategies for optimizing front-end performance in React:
- \`Code-splitting\`: Split your app into smaller chunks for faster loading.
- \`Lazy loading\`: Load components only when they are needed.
- \`Memoization\`: Use \`React.memo()\` or \`useMemo()\` to prevent unnecessary re-renders.
- \`Avoid unnecessary re-renders\`: Use \`shouldComponentUpdate\` or \`React.memo()\` to prevent re-renders when not needed.
    `,
  },
  {
    role: "user",
    content: "Can you show me an example of lazy loading a component?",
  },
  {
    role: "system",
    content: `
Here's an example of lazy loading a component in React:
\`\`\`javascript
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>React App</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;
\`\`\`
This will load \`LazyComponent\` only when it's required.
  `,
  },
  {
    role: "user",
    content:
      "Can you provide a visual representation of lazy loading in React?",
  },
  {
    role: "system",
    content: `
Here’s an image illustrating lazy loading in React:

{
  "prompt": "A visual representation of lazy loading in React, showing how components are loaded only when needed. Include components such as \`Suspense\` and \`lazy()\` with a loading indicator."
}
  `,
  },
]
