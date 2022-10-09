# Defining Routes

1. Install React Router:
-> `npm i react-router-dom`

2. Create a router using createBrowserRouter in App.js

->   
```
const router = createBrowserRouter([])

```

3. Add RouterProvider and pass router props. The props value will be the router created from the Browser Router. Do this inside the return statement of App.js.

-> 
```
<RouterProvider router={router}></RouterProvider>
```

4. Create some routes.
- Needs two things
- path
- element

->   
```
const router = createBrowserRouter
([
    { path: "/", element: <div>Default Page</div> },
    { path: "/home", element: <div>Home Page</div> },
    { path: "/about", element: <div>About Page</div> },
]);
```

- This can also be done using components.
- e.g: element: ```<Home></Home>```


- To create a header/navbar, anchor tags ```<a>``` will not make the application a Single Page Application(SPA). The page will reload.
- Thus we will use the ```<Link>``` tag. This helps to serve the SPA purpose.
-> ```<Link to='/home'>Home</Link>```
            

# Creating Routes

1. Create a link to go to that route.
2. Create components to add what to be displayed when that route is visited.
3. Add route so that react router knows the component it needs to display while that route is visited.

# Maintaining efficient header

1. Create a layouts/pages folder.
2. Create components inside the folder as per the names of required pages, in this case Main.js.
3. Use the Header component in ```<Main>``` components return statement.
4. Then use ```<Outlet><Outlet/>```, to make Main.js the main/default file to be displayed when the application reloads.
5. Outlet will help maintain the parenthood.
6. Now ```<Main><Main/>``` can be used as a component within the element's value inside the Browser Router's objects.
7. Now the other routes can be included within an array called children, which will be a property of the Browser Router array of objects for each route.
8. The things that are uncommon or different, as per the UI, i.e, things that will change as per different routes, take place within the ```<Outlet>```

->
```
const router = createBrowserRouter([
    {
      path: "/",
      element: <Default></Default>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
      ],
    },
  ]);
```