module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zinc-100": "#F4F4F5",
        "zinc-300": "#D4D4D8",
        "zinc-500": "#71717A",
      },
    },
  },
  plugins: [],
};
