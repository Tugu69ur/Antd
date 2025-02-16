import { PageLoading } from "@ant-design/pro-layout";
import { ErrorBoundary } from "@ant-design/pro-utils";
import { useAuthContext } from "hook/useAuthContext";
import AuthLayout from "layout/auth";
import DashboardLayout from "layout/dashboard";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";

const MainRoutes: React.FC = () => {
  const [user] = useAuthContext();

  const routes = [
    {
      key: "dashboard",
      path: "/dashboard",
      element: <DashboardLayout />,
      children: dashboardRoutes,
    },
  ];

  if (user?.authorized) {
    routes.push({
      key: "auth",
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes,
    });
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoading />}>{route.element}</Suspense>
            </ErrorBoundary>
          }
        >
          {route.children?.map((path) => (
            <Route
              key={path.key}
              path={path.path}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<PageLoading />}>{path.element}</Suspense>
                </ErrorBoundary>
              }
            />
          ))}
        </Route>
      ))}
      <Route
        key={"root"}
        path="*"
        element={
          user?.authorized ? (
            <Navigate to="dashboard/dashboard" />
          ) : (
            <Navigate to="auth/login" />
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;
