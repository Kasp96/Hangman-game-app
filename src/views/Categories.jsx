import { useContext } from "react";
import data from "../api/data.json";
import ICON_BACK from "../assets/icon-back.svg";
import { Link } from "react-router-dom";
import { OverlayContainer } from "../components/OverlayContainer";
import { ViewHeading } from "../components/ViewHeading";
import { GradientButton } from "../components/GradientButton";
import { BlueButton } from "../components/BlueButton";
import { CategoryContext } from "../contexts/CategoryContext";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useContext(CategoryContext);

  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-between">
        <GradientButton src={ICON_BACK} to="/" />
        <ViewHeading className="text-[48px]">Pick a Category</ViewHeading>
      </div>
      <div className="flex flex-col items-center">
        {Object.keys(data.categories).map((categoryName, index) => {
          return (
            <Link key={index} className="w-full" to="/gierka">
              <BlueButton
                onClick={() => setSelectedCategory(categoryName)}
                className="mb-4 w-full rounded-[24px] py-5.5 text-2xl before:rounded-[22px]"
              >
                {categoryName}
              </BlueButton>
            </Link>
          );
        })}
      </div>
    </OverlayContainer>
  );
};
