import data from "../api/data.json";
import { OverlayContainer } from "../components/OverlayContainer";
import { ViewHeading } from "../components/ViewHeading";
import { BackButton } from "../components/BackButton";
import { BlueButton } from "../components/BlueButton";

export const Categories = () => {
  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-between">
        <BackButton />
        <ViewHeading>Pick a Category</ViewHeading>
      </div>
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
