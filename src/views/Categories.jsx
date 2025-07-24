import data from "../api/data.json";
import { OverlayContainer } from "../components/OverlayContainer";
import { ViewHeading } from "../components/ViewHeading";
import { GradientButton } from "../components/GradientButton";
import { BlueButton } from "../components/BlueButton";
import ICON_BACK from "../assets/icon-back.svg";

export const Categories = () => {
  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-between">
        <GradientButton src={ICON_BACK} to="/" />
        <ViewHeading className="text-[48px]">Pick a Category</ViewHeading>
      </div>
      {/* mozliwe ze do zmiany i BackBtn i Viewheading ebda w jednym komponencie */}
      <div className="flex flex-col items-center">
        {Object.keys(data.categories).map((categoryName, index) => {
          return (
            <BlueButton
              key={index}
              className="mb-4 w-full rounded-[24px] py-5.5 text-2xl before:rounded-[22px]"
            >
              {categoryName}
            </BlueButton>
          );
        })}
      </div>
    </OverlayContainer>
  );
};
