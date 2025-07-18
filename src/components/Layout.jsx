import { Outlet } from "react-router-dom";
import { Categories } from "../views/Categories";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg flex min-h-screen w-full justify-center">
      {/* <Outlet/> */}
      <Categories/>
    </div>
  );
};
