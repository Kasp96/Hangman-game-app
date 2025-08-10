export const ProgressBar = ({ remainingAttempts }) => {
  return (
    <>
      <div className="relative h-[16px] w-[57px] overflow-hidden rounded-2xl bg-white">
        <div
          style={{
            width: `${remainingAttempts}` + "%",
          }}
          className="absolute top-[50%] left-0 ml-1 h-[8px] translate-y-[-50%] rounded-2xl bg-blue-700"
        ></div>
      </div>
    </>
  );
};
