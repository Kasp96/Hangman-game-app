import { RULES } from "../constants/rules";
import { ViewHeading } from "../components/ViewHeading";
import { BackButton } from "../components/BackButton";

export const HowToPlay = () => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col gap-6 bg-[rgba(0,0,0,0.35)] px-6 py-8">
      <div className="mb-[55px] flex items-center justify-between">
        <BackButton />
        <ViewHeading>How to Play </ViewHeading>
      </div>
      {RULES.map((rule) => {
        return (
          <div key={rule.number} className="rounded-[20px] bg-white p-8">
            <div className="flex items-center gap-4 text-[24px]">
              <p className="text-blue-500">{rule.number}</p>
              <p className="text-blue-700 uppercase">{rule.title}</p>
            </div>
            <p className="mt-4 text-[16px] leading-[120%] tracking-[0.5px] text-purple-200">
              {rule.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
