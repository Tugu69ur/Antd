import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const AuthLayout: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <div className="fixed bottom-10 text-white md:text-xl text-base text-center">
        @{new Date().getFullYear()} Зохиогчийн эрх хуулиар хамгаалагдаагүй.
      </div>
    </div>
  );
};

export default AuthLayout;
