import { useReducer } from "react";
import ICON_BACK from "../assets/icon-back.svg";
import { Link, Outlet } from "react-router-dom";
import { OverlayContainer } from "../components/OverlayContainer";
import { ViewHeading } from "../components/ViewHeading";
import { GradientButton } from "../components/GradientButton";
import { BlueButton } from "../components/BlueButton";
import { initialState, reducer } from "../reducer/reducer";
import { PATH_TO_CATEGORY_NAME } from "../constants/categories";

export const Categories = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const randomNumber = Math.floor(Math.random() * 30);

  return (
    <>
      {state.hasGameStarted ? (
        <Outlet context={{ state, dispatch }} />
      ) : (
        <OverlayContainer>
          <div className="mb-[55px] flex items-center justify-between">
            <GradientButton src={ICON_BACK} to="/" />
            <ViewHeading className="text-[48px]">Pick a Category</ViewHeading>
          </div>
          <div className="flex flex-col items-center">
            {Object.entries(PATH_TO_CATEGORY_NAME).map(
              ([slug, name], index) => {
                return (
                  <Link
                    key={index}
                    className="w-full"
                    to={`/categories/${slug}/${randomNumber}`} //
                  >
                    <BlueButton
                      onClick={() => {
                        dispatch({ type: "START_GAME" });
                      }}
                      className="mb-4 w-full rounded-[24px] py-5.5 text-2xl before:rounded-[22px]"
                    >
                      {name}
                    </BlueButton>
                  </Link>
                );
              },
            )}
          </div>
        </OverlayContainer>
      )}
    </>
  );
};
