const element = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement(
      "div",
      {
        id: "c1",
      },
      React.createElement("h1", {}, "hello world")
    ),
    React.createElement(
      "div",
      {
        id: "c2",
      },
      React.createElement("h1", {}, "react"),
      React.createElement("h1", {}, "this is the final child")
    ),
    React.createElement(
      "div",
      {
        id: "c2",
      },
      React.createElement("h1", {}, "react"),
      React.createElement("h1", {}, "this is the final child")
    ),
    React.createElement(
      "div",
      {
        id: "c2",
      },
      React.createElement("h1", {}, "react"),
      React.createElement("h1", {}, "this is the final child")
    ),
    React.createElement(
      "div",
      {
        id: "c2",
      },
      React.createElement("h1", {}, "react"),
      React.createElement("h1", {}, "this is the final child")
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("base"));
root.render(element);
