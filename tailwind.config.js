/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#ededed",
        rojo: "#f94940",
        charcoal: "#0a0e0b",
      },
      spacing: {},
      fontFamily: {
        "desktop-cta": "'DM Sans'",
        "mobile-h1-mobile-regular": "'Instrument Serif'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      "5xl": "24px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq268: {
        raw: "screen and (max-width: 268px)",
      },
      mq177: {
        raw: "screen and (max-width: 177px)",
      },
      mq413: {
        raw: "screen and (max-width: 413px)",
      },
      mq387: {
        raw: "screen and (max-width: 387px)",
      },
      mq372: {
        raw: "screen and (max-width: 372px)",
      },
      mq352: {
        raw: "screen and (max-width: 352px)",
      },
      mq318: {
        raw: "screen and (max-width: 318px)",
      },
      mq281: {
        raw: "screen and (max-width: 281px)",
      },
      mq274: {
        raw: "screen and (max-width: 274px)",
      },
      mq253: {
        raw: "screen and (max-width: 253px)",
      },
      mq246: {
        raw: "screen and (max-width: 246px)",
      },
      mq240: {
        raw: "screen and (max-width: 240px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
