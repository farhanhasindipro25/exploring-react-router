1. Install React Router:
-> npm i react-router-dom

2. Create a router using createBrowserRouter in App.js

->   const router = createBrowserRouter([])

3. Add RouterProvider and pass router props. The props value will be the router created from the Browser Router. Do this inside the return statement of App.js.

-> <RouterProvider router={router}></RouterProvider>

4. Create some routes.
- Needs two things
- path
- element

->   
const router = createBrowserRouter
([
    { path: "/", element: <div>Default Page</div> },
    { path: "/home", element: <div>Home Page</div> },
    { path: "/about", element: <div>About Page</div> },
]);