export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url(assets/background-mobile.svg)",
      },
      boxShadow: {
        "layer-1": "inset 0px -10px 0 10px rgba(145, 0, 255, 0.8)",
        "layer-2": "inset 0 -4px 0px 4px rgb(0, 0, 0)",
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
