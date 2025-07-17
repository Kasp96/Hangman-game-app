export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url(assets/background-mobile.svg)",
        "gradient-heading": "var(--gradient-heading)",
      },
      boxShadow: {
        "layer-1": "inset 0 -10px 0 10px rgba(145, 0, 255, 0.8)",
        "layer-2": "inset 0 -4px 0px 4px rgb(0, 0, 0)",
        "layer-3": "inset 0 1px 0px 5px hsla(215, 57%, 55%, 0.5)",
        "layer-4": "inset 0 -3px 0px 3px hsl(248, 73%, 20%)",
        "layer-5": "inset 0 4px 0px 7px hsl(225, 90%, 55%)",
        "layer-6": "inset 0 -9px 0px 3px hsl(248, 73%, 20%)",
      },
      backgroundColor: {
        "blue-500": "hsl(223, 100%, 57%)",
        "blue-700": "hsl(250, 68%, 27%)",
      },
      fontSize: {
        "heading-XL": "136px",
        "heading-L": "88px",
        "heading-M": "48px",
        "heading-S": "32px",
      },
      
    },
  },
  plugins: [],
};
