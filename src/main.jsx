import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { HowToPlay } from "./views/HowToPlay.jsx";
import { MainMenu } from "./views/MainMenu.jsx";
import { Layout } from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <MainMenu />,
        path: "menu",
      },
      {
        element: <HowToPlay />,
        path: "info",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
