import { Message } from "@/stores/chatStore"

export const MESSAGES: Message[] = [
  {
    role: "user",
    content: "Can you show me how to implement a basic React component?",
  },
  {
    role: "system",
    content:
      "Sure! Here's a simple example of a React component that displays a greeting message.\n ```jsx\nimport React from 'react';\n\nconst Greeting = () => {\n  return <h1>Hello, welcome to my site!</h1>;\n};\n\nexport default Greeting;\n```",
  },
  {
    role: "user",
    content:
      "That looks great! Can you add a button that changes the greeting message when clicked?",
  },
  {
    role: "system",
    content:
      "Absolutely! Here's the updated version with a button that changes the message.\n```jsx\nimport React, { useState } from 'react';\n\nconst Greeting = () => {\n  const [message, setMessage] = useState('Hello, welcome to my site!');\n\n  const changeMessage = () => {\n    setMessage('Thanks for clicking the button!');\n  };\n\n  return (\n    <div>\n      <h1>{message}</h1>\n      <button onClick={changeMessage}>Click me</button>\n    </div>\n  );\n};\n\nexport default Greeting;\n```",
  },
  {
    role: "user",
    content:
      "Looks good! Can you share a quick guide on how to use hooks in React?",
  },
  {
    role: "system",
    content:
      "Sure! Here's a quick list of common React hooks and how they are used:\n- `useState`: Allows you to add state to your functional components.\n- `useEffect`: Used for side effects such as fetching data, subscribing to events, etc.\n- `useContext`: Lets you subscribe to React context without needing to pass props manually.\n- `useReducer`: An alternative to `useState`, more suitable for complex state logic.\n- `useRef`: Allows you to access a DOM element or store a mutable value.",
  },
  {
    role: "user",
    content:
      "That's helpful! Can you show me an image of a React component lifecycle?",
  },
  {
    role: "system",
    content:
      "Here’s an image that illustrates the React component lifecycle.\n![React Component Lifecycle](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)",
  },
]
