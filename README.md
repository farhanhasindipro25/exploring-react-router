# Defining Routes

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

- This can also be done using components.
- e.g: element: <Home></Home>


- To create a header/navbar, anchor tags <a> will not make the application a Single Page Application(SPA). The page will reload.
- Thus we will use the <Link> tag. This helps to serve the SPA purpose.
-> <Link to='/home'>Home</Link>
            

# Creating Routes

1. Create a link to go to that route.
2. Create components to add what to be displayed when that route is visited.
3. Add route so that react router knows the component it needs to display while that route is visited.