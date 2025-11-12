/** @type {import('tailwindcss').Config} */
const colors = {
  grayLight: "#E0E0E0",
  grayMedium: "#90A4AE",
  blueLight: "#1E88E5",
  blueDark: "#1565C0",
};

export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        'gradient-hydraulic': `linear-gradient(135deg, ${colors.blueLight}, ${colors.blueDark})`,
        'gradient-hydraulic-light': `linear-gradient(135deg, ${colors.grayLight}, ${colors.grayMedium})`,
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
