/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color-1': '#64ffda',
        'lightest-slate': '#ccd6f6',
        'lightest-navy': '#233554',
        'light-navy': '#112240',
        'light-slate': '#8892b0',
        'slate1': '#a8b2d1',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
