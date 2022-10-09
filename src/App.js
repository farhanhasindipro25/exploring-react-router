import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Default from "./layouts/Default";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default></Default>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
        {
          path: "/users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        {
          path: "/user/:userId",
          loader: async ({ params }) => {
            // console.log(params.userId);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          },
          element: <UserDetails></UserDetails>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404: Route Does Not Exist</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
