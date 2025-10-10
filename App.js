const heading = React.createElement("h1", {id: "heading"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root1"));

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I am h1 tag")));

root.render(parent);
console.log(parent);