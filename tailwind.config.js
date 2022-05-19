module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zinc-50": "#FAFAFA",
        "zinc-100": "#F4F4F5",
        "zinc-200": "#E4E4E7",
        "zinc-300": "#D4D4D8",
        "zinc-400": "#A1A1AA",
        "zinc-500": "#71717A",
        "zinc-600": "#52525B",
        "zinc-800": "#27272A;",
        "zinc-900": "#18181B",
        "light-blue": "#00D1FF",
      },
      backgroundImage: {
        "linear-1": "linear-gradient(180deg, #FF34D2 0%, #994DC5 100%)",
        "linear-2":
          "linear-gradient(101.02deg, #9CA3B7 11.48%, #D6D6D6 87.91%);",
        "linear-3":
          "linear-gradient(101.02deg, #9CA3B7 11.48%, #D6D6D6 87.91%);",
        "linear-4": "linear-gradient(92.19deg, #22274E 7.39%, #858ABD 227.97%)",
        "linear-5":
          "linear-gradient(167.24deg, #0075FF -40.01%, #00D1FF 94.06%)",
        "linear-6":
          "linear-gradient(84.79deg, #363B69 -31.91%, #FFFFFF 245.71%)",
        "linear-7":
          "linear-gradient(165.57deg, #000AFF -38.18%, #00D1FF 133.47%)",
        "linear-8": "linear-gradient(214.09deg, #C4D2FF 52.1%, #5179FF 94.34%)",
        "linear-9":
          "linear-gradient(114.47deg, #E3D7EC -13.25%, #EAC2FF 82.27%, #1945D9 144.64%, #1E1822 193.2%)",
        "linear-10":
          "linear-gradient(89.05deg, #6389FB 4.08%, #6B56EF 49.35%, #5A3CF4 99.16%)",
        "linear-11":
          "linear-gradient(85.6deg, #1E1822 -60.11%, #EAC2FF 133.11%, #1945D9 259.27%, #1E1822 357.51%)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1224px",
        "2xl": "1224px",
      },
    },
  },
  plugins: [],
};
