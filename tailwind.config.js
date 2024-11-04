/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_book_notes/**/*.html",
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Crimson Pro", "Times", "Times New Roman", "serif"],
      mono: ["Fira Code", "ui-monospace", "monospace"],
      sans: ["Outfit", "Open Sans", "open sans", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      colors: {
        "mariner": {
          "50": "#eff7ff",
          "100": "#dbedfe",
          "200": "#bfe0fe",
          "300": "#93cefd",
          "400": "#60b2fa",
          "500": "#3b92f6",
          "600": "#1f70ea",
          "700": "#1d5ed8",
          "800": "#1e4caf",
          "900": "#1e438a",
          "950": "#172a54",
        },
      },
      fontFamily: {
        handwritten: ["Covered By Your Grace", "Comic Sans MS", "cusrive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "rotate(-10deg) translateY(0)" },
          "50%": { transform: "rotate(-10deg) translateY(-3%)" },
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
