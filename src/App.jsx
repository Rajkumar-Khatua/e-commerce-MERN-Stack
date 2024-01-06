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
import MobileMenu from "./components/MobileMenu/MobileNavar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import SearchPage from "./pages/Search/SearchPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductDetailsPage from "./pages/SingleProduct/ProductDetailsPage";
import { CartProvider } from "./components/Cart/Cart";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ThankYouPage from "./pages/ThankYou/ThankYou";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            {window.innerWidth <= 824 ? <MobileMenu /> : <Navbar />}
            <Outlet />
            <Footer />
          </CartProvider>
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
          path: "/products",
          element: <ProductListingPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/thank-you",
          element: <ThankYouPage />,
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
