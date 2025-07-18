import data from "../api/data.json";
import { ViewHeading } from "../components/ViewHeading";
import { BackButton } from "../components/BackButton";

export const Categories = () => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col gap-6 bg-[rgba(0,0,0,0.35)] px-6 py-8">
      <div className="mb-[55px] flex items-center justify-between">
        <BackButton />
        <ViewHeading>Pick a Category</ViewHeading>
      </div>
      {Object.keys(data.categories).map((categoryName) => {
        return <button>{categoryName}</button>;
      })}
    </div>
  );
};
