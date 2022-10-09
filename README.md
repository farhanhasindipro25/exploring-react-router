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

# Maintaining an efficient header

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

# Loading API data

1. Let's say the component is Users.
2. In App.js, the browser router array of objects has it's particular object for the route defined for users.
3. In that object, take a new property called loader, which will have the value as an asynchronous arrow function, returning the API link fetched.

```
{ 
  path: "/users", 
  loader: async ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
  },
 element: <Users></Users> 
}
```

4. Now use the ```useLoaderData()``` hook to load the fetched data that the loader asynchronous arrow function fetched. Do this inside the Users component.

```
const users = useLoaderData();
```

- The users value here will store the data fetched from the API.
- Next, values from this fetched data can be sent as props to it's child components.
- The respective variables can be destructured and then displayed in the UI.

# React route parameter
# Loading data based on Dynamic Routes
# Creating Dynamic Routes

This can be done in two ways.


1. Select the element through which the dynamic route needs to be established. Establish a ```<Link></Link>``` tag and on it's "to" attribute, add the link dynamically using template literals.

### WAY ONE

```
<p>            
  UserName: 
  <Link to={`/user/${id}`}>
    {username}
  </Link>
</p>
```

### WAY TWO
```
<Link to={`/post/${id}`}>
  <button className='btn-post-details'>
    Show Details
  </button>
</Link>
```

### WAY THREE

```
const navigate = useNavigate();
const handleNavigate = () => {
  navigate(`post/${id}`)
}
return (
  <div>
    <button onClick={handleNavigate}>See Post</button>
  </div>
);

```

2. Now to define the route, when that dynamic route is visited, a new object is created within the browser router array of objects. The element is the component that displays certain things when that dynamic route is visited. In this case ```<UserDetails></UserDetails>```. The path is set dynamically as a variable, so that for each user, the URL has a different ID.

-> 
```
{
  path: "/user/:userId",
  loader: async ({ params }) => {
    // console.log(params.userId);
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  },
  element: <UserDetails></UserDetails>,
},
```

3. The asynchronous loader arrow function takes the dynamic part of the route as destructured parameters. This helps to fetch data from the API for specific userIDs making the URL dynamic.

4. The ```<UserDetails></UserDetails>``` component then can show information from the API into the UI by destructuring the variables as needed from the variable that stores the fetched data from the "useLoaderData()" hook.