import { createBrowserRouter } from "react-router";

import { RootLayout, RootErrorBoundary, NotFoundPage } from "./layouts/RootLayout";
import { RequireAuth } from "./layouts/RequireAuth";
import { IndexPage } from "./pages/Index";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";
import { AppPage } from "./pages/App";

// Client-side route table. Static hosting serves index.html for every path
// (see vercel.json), so deep links like /app resolve here in the browser.
export const routes = [
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      { index: true, Component: IndexPage },
      { path: "signin", Component: SignInPage },
      { path: "signup", Component: SignUpPage },
      {
        Component: RequireAuth,
        children: [{ path: "app", Component: AppPage }],
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

export const router = createBrowserRouter(routes);
