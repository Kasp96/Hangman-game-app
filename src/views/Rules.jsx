import { RULES } from "../constants/rules";
import { OverlayContainer } from "../components/OverlayContainer";
import { RuleCard } from "../components/RuleCard";
import { ViewHeading } from "../components/ViewHeading";
import { GradientButton } from "../components/GradientButton";
import ICON_BACK from "../assets/icon-back.svg";

export const Rules = () => {
  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-between">
        <GradientButton to="/" src={ICON_BACK} />
        <ViewHeading className='text-[48px]'>How to Play </ViewHeading>
      </div>
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
    </OverlayContainer>
  );
};
