// src/index.jsx
// React entry point with complex JSX example
function App() {
  const [count, setCount] = React.useState(0);
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  return (
    <div>
      <h1>Hello, Reactest!</h1>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);