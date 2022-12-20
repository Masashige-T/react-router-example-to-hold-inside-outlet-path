import React from "react"
import ReactDOM from "react-dom/client"
import App, { FirstPage, FirstNestPage, SecondPage, SecondNestPage } from "./App"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "first",
        element: <FirstPage />,
        handle: {
          origin: 'first'
        },
        children: [
          {
            path: "nest",
            element: <FirstNestPage />,
            handle: {
              origin: 'first'
            },
          },
        ],
      },
      {
        path: "second",
        element: <SecondPage />,
        handle: {
          origin: 'second'
        },
        children: [
          {
            path: "nest",
            element: <SecondNestPage />,
            handle: {
              origin: 'second'
            },
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
