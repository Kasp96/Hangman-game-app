import { BlueButton } from "./BlueButton";
import { GlassPanel } from "./GlassPanel";
import { ViewHeading } from "./ViewHeading";
import { Link } from "react-router-dom";

export const OptionsModal = ({ setIsModalShown, children, dispatch }) => {
  return (
    <div className="absolute top-0 z-50 h-full w-full">
      <GlassPanel className="h-[435px] gap-[37px] pb-18">
        <ViewHeading
          className="-mb-2 text-[90px]"
          style={{ WebkitTextStroke: "16px #243041" }}
        >
          {children}
        </ViewHeading>
        <BlueButton
          onClick={() => setIsModalShown((prevModal) => !prevModal)}
          className="text-heading-S w-[225px] rounded-[30px] py-2 before:rounded-[29px]"
        >
          Continue
        </BlueButton>
        <Link to="/categories">
          <BlueButton
            onClick={() =>
              dispatch({
                type: "END_GAME",
              })
            }
            className="text-heading-S w-[260px] rounded-[30px] py-2 before:rounded-[29px]"
          >
            New category
          </BlueButton>
        </Link>
        <Link to="/">
          <BlueButton className="text-heading-S bg-gradient-button w-[225px] rounded-[30px] py-2 before:rounded-[29px]">
            Quit game
          </BlueButton>
        </Link>
      </GlassPanel>
    </div>
  );
};
