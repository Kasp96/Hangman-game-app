import data from "../api/data.json";
import { ViewHeading } from "../components/ViewHeading";
import { BackButton } from "../components/BackButton";
import { BlueButton } from "../components/BlueButton";

export const Categories = () => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col gap-6 bg-[rgba(0,0,0,0.35)] px-6 py-8">
      <div className="mb-[55px] flex items-center justify-between">
        <BackButton />
        <ViewHeading>Pick a Category</ViewHeading>
      </div>
      <div className="flex flex-col items-center">
        {Object.keys(data.categories).map((categoryName, index) => {
          return (
            <BlueButton
              key={index}
              className="mb-4 w-full rounded-[24px] py-6 text-2xl before:rounded-[22px]"
            >
              {categoryName}
            </BlueButton>
          );
        })}
      </div>
    </div>
  );
};
