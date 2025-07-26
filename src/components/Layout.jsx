import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContext";

export const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
      <div className=" bg-mobile-bg bg-cover z-0 flex min-h-screen w-full justify-center">
        <Outlet />
      </div>
    </CategoryContext.Provider>
  );
};
