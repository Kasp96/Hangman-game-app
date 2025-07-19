import { RULES } from "../constants/rules";
import { OverlayContainer } from "../components/OverlayContainer";
import { RuleCard } from "../components/RuleCard";
import { ViewHeading } from "../components/ViewHeading";
import { BackButton } from "../components/BackButton";

export const Rules = () => {
  return (
    <OverlayContainer>
      <div className="mb-[55px] flex items-center justify-between">
        <BackButton />
        <ViewHeading>How to Play </ViewHeading>
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
