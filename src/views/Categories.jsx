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

  return (
    <>
      {state.hasGameStarted ? (
        <Outlet context={{ state, dispatch }} />
      ) : (
        <OverlayContainer>
          <div className="mb-[55px] flex items-center min-md:justify-center">
            <GradientButton src={ICON_BACK} to="/" />
            <ViewHeading className="ml-auto text-[48px] min-md:ml-0 min-md:text-[104px] min-lg:text-[136px]">
              Pick a Category
            </ViewHeading>
          </div>
          <div className="flex flex-col items-center min-md:mx-auto min-md:max-w-[750px] min-md:flex-row min-md:flex-wrap min-md:justify-center min-md:gap-8 min-lg:max-w-[1300px]">
            {Object.entries(PATH_TO_CATEGORY_NAME).map(
              ([slug, name], index) => {
                return (
                  <Link
                    key={index}
                    className="w-full min-md:w-fit"
                    to={`/categories/${slug}/${state.wordId}`} //
                  >
                    <BlueButton
                      onClick={() => {
                        dispatch({
                          type: "START_GAME",
                          payload: { slug: slug },
                        });
                      }}
                      className="mb-4 w-full rounded-[24px] py-5.5 text-2xl before:rounded-[22px] min-md:flex min-md:h-[182px] min-md:w-[325px] min-md:items-center min-md:rounded-[40px] min-md:text-[48px] before:min-md:rounded-[40px] min-lg:h-[190px] min-lg:w-[385px]"
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
