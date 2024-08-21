import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/portfolio",
      element: <App />,
      //   errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/portfolio" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <RouterProvider router={router} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
