import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg sm:bg-tablet-bg lg:bg-desktop-bg z-0 flex min-h-screen w-full justify-center bg-cover">
      <Outlet />
    </div>
  );
};
