import { useContext } from "react";
import data from "../api/data.json";
import { CategoryContext } from "../contexts/CategoryContext";

export const SecretWord = () => {
  const [selectedCategory] = useContext(CategoryContext);

console.log(data);

  return (
    <div className="mb-[118px] flex flex-wrap gap-4">
      <button className="shadow-layer-word mb-3 rounded-[10px] bg-blue-500 px-3 py-1 text-[40px] text-white">
        U
      </button>
    </div>
  );
};
