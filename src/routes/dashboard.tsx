import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const BurtgelPage = lazy(() => import("pages/dashboard/burtgel"));
const MedeelelPage = lazy(() => import("pages/dashboard/lavlah"));
const TailanPage = lazy(() => import("pages/dashboard/tailan"));


export const dashboardRoutes = [
  {
    key: "dashboard",
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    key: "burtgel",
    path: "burtgel",
    element: <BurtgelPage />,
  },
  {
    key: "lavlah",
    path: "lavlah",
    element: <MedeelelPage />,
  },
  {
    key: "tailan",
    path: "tailan",
    element: <TailanPage />,
  },

];
