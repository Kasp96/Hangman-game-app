import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg z-0 flex min-h-screen w-full justify-center">
      <Outlet />
    </div>
  );
};
