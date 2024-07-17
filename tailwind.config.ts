import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        primary: ["Manrope"],
      },
      spacing: {
        2.25: "2.25rem",
        5.75: "5.35rem",
        6.125: "4.5rem",
        29.35: "23.5rem",
        41: "33.5rem",
        57: "47.65rem",
        6.25: "6.25rem",
        8.5: "8rem",
        12.5: "12.5rem",
        32.5: "32.5rem",
        5.5: "5.5rem",
      },
      inset: {
        "26": "6.5rem",
        "84": "18.5rem",
        "100": "28rem",
      },
      width: {
        "128": "49.5rem",
      },
      padding: {
        // "pt-32": "2rem",
      },
      colors: {
        blue: {
          "25": "#302384",
          "30": "#d7d2e9",
          "50": "#a49dcb",
          "100": "#2510AB",
          "200": "#150193",
          "300": "#60598d",
          "400": "#2e227a",
        },
        grey: {
          "100": "#1C1D21",
          "200": "#d1cee2",
          "300": "#1C1D21",
          "400": "#62656A",
        },
        green:{
          "100": "#06FACE",
        }
      },
      screens: {
        xl: "1360px",
      },
      fontSize: {
        "32xl": "2rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        'leading-243': '2.4312rem!important',
        'leading-12': '2.65rem',
      },
      zIndex: {
        "999": "999",
      },
      mixBlendMode: {
        'lighten': 'lighten',
        'screen': 'screen',
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../app/images/pattern.png')",
        "oval-pattern": "url('../app/images/oval-bg.png')",
        "footer-pattern": "url('../app/images/footer-bg.png')",
        "blue-pattern": "url('../app/images/blue-bg.png')",
        // gradient
        "gradient-primary": `linear-gradient(90deg, rgba(15,6,70,1) 0%, rgba(26,11,119,1) 50%, rgba(38,16,170,1) 100%);`,
        "gradient-secondary": `linear-gradient(90deg, rgba(249,249,251,1) 0%, rgba(251,251,253,1) 50%, rgba(255,255,255,1) 100%);`,
      }),
      boxShadow: {
        button: "4px 4px 0px 0px #06FACE;",
        primary: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
