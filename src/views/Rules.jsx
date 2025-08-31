import { RULES } from "../constants/rules";
import { OverlayContainer } from "../components/OverlayContainer";
import { RuleCard } from "../components/RuleCard";
import { ViewHeading } from "../components/ViewHeading";
import { GradientButton } from "../components/GradientButton";
import ICON_BACK from "../assets/icon-back.svg";

export const Rules = () => {
  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-end min-md:justify-center">
        <GradientButton to="/" src={ICON_BACK} />
        <ViewHeading className="text-[48px] min-md:text-[100px] min-lg:text-[120px]">
          How to Play
        </ViewHeading>
      </div>
      <div className="flex flex-col items-center gap-6 min-md:gap-8 min-lg:flex-row min-lg:justify-center">
        {RULES.map((rule) => {
          return (
            <RuleCard
              key={rule.number}
              number={rule.number}
              text={rule.text}
              title={rule.title}
            />
          );
        })}
      </div>
    </OverlayContainer>
  );
};
