module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  mode: "jit",
  theme: {
    colors: {
      primary: "#58595b",
      secondary: "#F1E7E4",
      background: "#FFFFFF",
      buttons: "#1B1F22",
      hover: "#9F3324",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        serif: ["Jackwrite", "serif"],
        serifthin: ["Jackwritethin", "serif"],
      },
    },
  },
  plugins: [],
};
