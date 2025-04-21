// src/index.tsx
// React entry point written in TypeScript/TSX
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const items: string[] = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  return (
    <div>
      <h1>Hello, Reactest! (TypeScript)</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}