import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./components/Layout";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement:<ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}