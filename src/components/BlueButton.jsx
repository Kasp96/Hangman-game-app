export const BlueButton = () => {
  return (
    <button
      className="text-heading-S shadow-layer-3 before:shadow-layer-4 relative mb-16 flex w-[260px] justify-center rounded-[30px] bg-blue-500 py-2 tracking-wide uppercase before:absolute before:inset-[0] before:rounded-[29px] before:content-['']"
      style={{
        color: "var(--color-white)",
        textShadow: `
                  -1px -1px 0 black,
                   1px -1px 0 black,
                  -1px  1px 0 black,
                   1px  1px 0 black
                    `,
        WebkitTextStroke: "0.25px black",
      }}
    >
      how to play
    </button>
  );
};
