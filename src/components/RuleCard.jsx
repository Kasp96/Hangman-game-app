export const RuleCard = ({ title, number, text }) => {
  return (
    <div key={number} className="rounded-[20px] bg-white p-8">
      <div className="flex items-center gap-4 text-[24px]">
        <p className="text-blue-500">{number}</p>
        <p className="text-blue-700 uppercase">{title}</p>
      </div>
      <p className="mt-4 text-[16px] leading-[120%] tracking-[0.5px] text-purple-200">
        {text}
      </p>
    </div>
  );
};
