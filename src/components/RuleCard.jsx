export const RuleCard = ({ title, number, text }) => {
  return (
    <div
      key={number}
      className="rounded-[20px] bg-white p-8 min-md:max-w-[680px] min-md:rounded-[40px] min-md:p-6 min-md:pl-[11rem] min-lg:flex min-lg:min-h-[550px] min-lg:max-w-[385px] min-lg:flex-col min-lg:items-center min-lg:p-[0] min-lg:px-[48px] min-lg:pt-[65px] "
    >
      <div className="relative flex items-center gap-4 text-[24px] min-lg:flex-col min-lg:gap-0">
        <p className="text-blue-500 min-md:absolute min-md:top-1/2 min-md:left-[-7rem] min-md:translate-y-[-20%] min-md:text-[88px] min-lg:static">
          {number}
        </p>
        <p className="text-blue-700 uppercase min-md:text-[40px] min-md:tracking-[1px] min-lg:text-[48px] min-lg:mt-[-2rem] min-lg:mb-[1rem]">
          {title}
        </p>
      </div>

      <p className="mt-4 text-[16px] leading-[120%] tracking-[0.5px] text-purple-200 min-md:text-[20px] min-lg:text-center min-lg:text-wrap min-lg:text-[26px]">
        {text}
      </p>
    </div>
  );
};
