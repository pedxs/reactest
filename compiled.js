// Precompiled React code without in-browser JSX transformation
"use strict";

// App component using React.createElement (compiled from JSX)
var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, Reactest! (Compiled)"),
    React.createElement("p", null, "This page uses precompiled code without in-browser Babel.")
  );
};

// Render the App into the root element
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));