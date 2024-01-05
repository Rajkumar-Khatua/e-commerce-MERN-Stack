// App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import MobileMenu from "./components/MobileMenu/MobileNavar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import SearchPage from "./pages/Search/SearchPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {window.innerWidth <= 824 ? <MobileMenu /> : <Navbar />}
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/products",
          element:<ProductListingPage/>
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <h1>Not Found</h1>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
