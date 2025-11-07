## Parcel
- Dev Build
- Locacl Server
- HMR = Hot Module Replacement
- File Watching Algorithm 
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- tree Shaking
- Error Handling
  // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)


## 2 types of Routing in web apps
 - Client Side Routing
 - Server Side Routing

## Functional Component
// Functional component should be in PascalCase
// Functional component should return a single element
// Functional component must be exported or imported with {}
// Functional component name must start with capital letter
// Functional component can also return multiple elements but they must be wrapped in a single element or React.Fragment

- root.rnder is used to render the react element or component in the DOM
- render method takes a react element or component as an argument and converts it into a DOM element and adds it to the DOM and html page

## Hooks =>
Hooks in React keep sync the ui with the data.
 Whenever a state variable is updated, react re-renders the component to reflect the changes in the UI.
 Hooks are special functions which let us "hook into" React features.
Examples of hooks are useState, useEffect, useContext etc.
Custom hooks are normal JavaScript functions whose names start with "use" and that may call other hooks.
Custom hooks allow us to extract component logic into reusable functions.

## useEffect() =>
   // if no dependency array  => useEffect is called on every render
   // if dependency array is empty = [] => useffect is called on initial render(just once)
   // if there is dependency array like state varibale  => called everytime state varibale is updated 

## react-router (package)
1. createBrowserRouter(component)
 This function is used to define all your routes basically, it maps URLs to React components.

2. RouterProvider(component)
 This is the top-level component that activates your router.
 You pass it the router you created with createBrowserRouter, and it handles everything (navigation, rendering, etc.).

3. Outlet(component)
  <Outlet /> is used in nested routes — it’s a placeholder where child routes will appear.
  Think of it as:
  “Show the child page content here.”
4. Link
   <Link> is React Router’s version of <a> tag — used for internal navigation without reloading the page.

⚠️ 2. Hooks can’t be asynchronous

If you try to await inside the main hook body, React will complain —
Hooks must return synchronously (immediately) during rendering.

React needs to finish rendering the component tree first.
Async code should run after render, not during.

That’s why useEffect exists — it’s React’s way of saying:

“Do this side effect (fetch, timeout, etc.) after rendering.”  


## Chunking, Code splitting, Dynamic Bundling, Lazy Loading, on demand Loading

## CSS
1. sass
2. scss
3. styled-component
4. Material UI
5. Bootstrap
6. Tailwind
7. chakra UI


