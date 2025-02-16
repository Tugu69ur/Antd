import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/auth"));

export const authRoutes = [
  {
    key: "login",
    path: "login",
    element: <LoginPage />,
  },
];
