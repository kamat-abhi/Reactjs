import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello from Reacttt");
const root = ReactDOM.createRoot(document.getElementById("root1"));

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I am h1 tttttag")));

root.render(parent);
console.log(parent);