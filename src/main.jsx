import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Rules } from "./views/Rules.jsx";
import { MainMenu } from "./views/MainMenu.jsx";
import { Layout } from "./components/Layout.jsx";
import { Categories } from "./views/Categories.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <MainMenu />,
        path: "/",
      },
      {
        element: <Rules />,
        path: "rules",
      },
      {
        element: <Categories />,
        path: "categories",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
