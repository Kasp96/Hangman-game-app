export const ProgressBar = ({ remainingAttempts }) => {
  return (
    <>
      <div className="min-lg:w-[240px] relative h-[16px] w-[57px] overflow-hidden rounded-2xl bg-white min-md:h-[31px] min-md:w-[160px]">
        <div
          style={{
            width: `${remainingAttempts}` + "%",
          }}
          className="absolute top-[50%] left-0 ml-1 h-[8px] translate-y-[-50%] rounded-2xl bg-blue-700 min-md:h-[13px] min-md:translate-x-[0.5rem] min-lg:translate-x-[0.85rem]"
        ></div>
      </div>
    </>
  );
};
