import React from "react";
import ReactDOM from "react-dom/client";

// React Elementt
const heading = React.createElement("h1", { id: "title" }, "Hello World from React"); 


const heading2 = (
   <h1 id="title" key="h2">hello world from JSX</h1>

)
//JSX- is not HTML in JS (we can say html like syntax) 


// React Functional Component
const FirstComponent = () => (
   <div><h1>Firstcomponent</h1></div>
)
const SecondComponent = () => {
   return (
      <h1 className="head">hello from react component 1
      </h1> )
      
}
let number = 1000
const HeadingComponent = () => (
   
   <div id="container">
      {number}
      {heading}
      {heading2}
      {FirstComponent()}
      {SecondComponent()}
      <div>
         <FirstComponent/>
      </div>
      <FirstComponent/>
      <SecondComponent/>
      <FirstComponent/>
      //comoponent composition 
      <h1>Namaste react from main component</h1>
   </div>

)
// Functional component should be in PascalCase
// Functional component should return a single element
// Functional component must be exported or imported with {}
// Functional component name must start with capital letter
// Functional component can also return multiple elements but they must be wrapped in a single element or React.Fragment
//

//root.rnder is used to render the react element or component in the DOM
//render method takes a react element or component as an argument and converts it into a DOM element and adds it to the DOM and html page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);