import { BlueButton } from "./BlueButton";
import { GlassPanel } from "./GlassPanel";
import { ViewHeading } from "./ViewHeading";
import { Link } from "react-router-dom";

export const OptionsModal = ({ children, state, dispatch }) => {
  return (
    <div className="absolute top-0 left-0 z-50 h-full w-full">
      <GlassPanel className="absolute left-1/2 h-[435px] translate-x-[-50%] gap-[37px] pb-18 min-md:h-[445px] min-md:w-[592px] min-md:rounded-[50px]">
        <ViewHeading
          className="-mb-2 text-[90px] min-md:-mb-4 min-md:text-[134px]"
          style={{ WebkitTextStroke: "16px #243041" }}
        >
          {children}
        </ViewHeading>
        <BlueButton
          onClick={() => {
            if (state.modalTitle === "Paused") {
              dispatch({
                type: "HIDE_MODAL",
              });
            } else if (state.modalTitle !== "Paused") {
              dispatch({
                type: "RESET_GAME",
              });
            }
          }}
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
        <Link className="group relative w-[225px]" to="/">
          <BlueButton className="text-heading-S relative !z-10 w-[225px] rounded-[30px] bg-transparent py-2 before:rounded-[29px] before:bg-transparent hover:bg-transparent">
            Quit game
          </BlueButton>
          <span className="gradient-styles bg-gradient-button !z-0 h-[95%] w-[99%] !rounded-[30px] before:rounded-[29px]"></span>
          <span className="gradient-styles bg-gradient-button-hover !z-0 h-[95%] w-[99%] !rounded-[30px] opacity-0 transition-all group-hover:opacity-100 before:rounded-[29px]"></span>
        </Link>
      </GlassPanel>
    </div>
  );
};
