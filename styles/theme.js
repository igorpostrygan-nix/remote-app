const extend = {
  colors: {
    "blue-gray-brand": {
      100: "#dfe7ec",
      200: "#ccd9e0",
      300: "#b9cbd5",
      400: "#9fb8c6",
      500: "#83a2b4",
      600: "#5c8399",
      700: "#415c6c",
      800: "#2e414c",
      900: "#1f2c33",
      "050": "#eff3f5",
    },
    danger: {
      100: "#fddddd",
      200: "#fcc0c0",
      300: "#fa9999",
      400: "#f86e6d",
      500: "#f75150",
      600: "#f52e2d",
      700: "#d20b0a",
      800: "#b90a08",
      900: "#9c0807",
      "050": "#fef0f0",
    },
    disabled: {
      100: "#d6d7dc",
      200: "#c3c4cb",
      300: "#adafb8",
      400: "#9a9ca7",
      500: "#878a97",
      600: "#747786",
      700: "#666976",
      800: "#555862",
      900: "#34363c",
      "050": "#ececee",
    },
    grays: {
      100: "#ededed",
      200: "#d9d9d9",
      300: "#bfbfbf",
      400: "#949494",
      500: "#757575",
      600: "#5e5e5e",
      700: "#4c4c4c",
      800: "#3b3b3b",
      900: "#292929",
      "050": "#f7f7f7",
      black: "#000000",
      white: "#ffffff",
    },
    informative: {
      100: "#d6e5ff",
      200: "#bdd5ff",
      300: "#99beff",
      400: "#70a5ff",
      500: "#478bff",
      600: "#005eff",
      700: "#004ccc",
      800: "#003b9e",
      900: "#002d7a",
      "050": "#ebf1ff",
    },
    "orange-brand": {
      100: "#ffdcc2",
      200: "#ffc89e",
      300: "#ffa561",
      400: "#ff7a14",
      500: "#f06800",
      600: "#d15b00",
      700: "#ad4b00",
      800: "#853a00",
      900: "#612a00",
      "050": "#fff0e5",
    },
    success: {
      100: "#ccfff2",
      200: "#99ffe5",
      300: "#5cffd6",
      400: "#00ffbf",
      500: "#00cc99",
      600: "#00ad82",
      700: "#008f6c",
      800: "#007558",
      900: "#005741",
      "050": "#ebfffa",
    },
    warning: {
      100: "#fce9cf",
      200: "#fbdbb1",
      300: "#f9ce95",
      400: "#f6b35b",
      500: "#f49f2e",
      600: "#da810b",
      700: "#b46a09",
      800: "#915608",
      900: "#663c05",
      "050": "#fef8f0",
    },
  },
  fontSize: {
    "size-xs": "0.75rem",
    "size-sm": "0.875rem",
    "font-weight-black": "1rem",
    "font-weight-bold": "1rem",
    "font-weight-book": "1rem",
    "font-weight-extralight": "1rem",
    "font-weight-light": "1rem",
    "font-weight-medium": "1rem",
    "leading-2-xl": "1rem",
    "leading-3-xl": "1rem",
    "leading-4-xl": "1rem",
    "leading-5-xl": "1rem",
    "leading-6-xl": "1rem",
    "leading-base": "1rem",
    "leading-lg": "1rem",
    "leading-sm": "1rem",
    "leading-xl": "1rem",
    "leading-xs": "1rem",
    "size-base": "1rem",
    "size-lg": "1.125rem",
    "size-xl": "1.25rem",
    "size-2-xl": "1.5rem",
    "size-3-xl": "1.75rem",
    "size-4-xl": "2rem",
    "size-5-xl": "2.375rem",
    "size-6-xl": "3rem",
    "size-7-xl": "4rem",
  },
  lineHeight: {
    "size-2-xl": "1px",
    "size-3-xl": "1px",
    "size-4-xl": "1px",
    "size-5-xl": "1px",
    "size-6-xl": "1px",
    "size-7-xl": "1px",
    "size-base": "1px",
    "size-lg": "1px",
    "size-sm": "1px",
    "size-xl": "1px",
    "size-xs": "1px",
    "font-weight-black": "15px",
    "font-weight-bold": "15px",
    "font-weight-book": "15px",
    "font-weight-extralight": "15px",
    "font-weight-light": "15px",
    "font-weight-medium": "15px",
    "leading-xs": "18px",
    "leading-sm": "21px",
    "leading-base": "24px",
    "leading-lg": "27px",
    "leading-xl": "30px",
    "leading-2-xl": "34px",
    "leading-3-xl": "38px",
    "leading-4-xl": "44px",
    "leading-5-xl": "58px",
    "leading-6-xl": "77px",
  },
  fontFamily: {
    "font-weight-black": ["GothamNarrSSm-Black"],
    "font-weight-bold": ["GothamNarrSSm-Bold"],
    "font-weight-book": ["GothamNarrSSm-Book"],
    "font-weight-extralight": ["GothamNarrSSm-XLight"],
    "font-weight-light": ["GothamNarrSSm-Light"],
    "font-weight-medium": ["GothamNarrSSm-Medium"],
    "leading-2-xl": ["GothamNarrSSm-Book"],
    "leading-3-xl": ["GothamNarrSSm-Book"],
    "leading-4-xl": ["GothamNarrSSm-Book"],
    "leading-5-xl": ["GothamNarrSSm-Book"],
    "leading-6-xl": ["GothamNarrSSm-Book"],
    "leading-base": ["GothamNarrSSm-Book"],
    "leading-lg": ["GothamNarrSSm-Book"],
    "leading-sm": ["GothamNarrSSm-Book"],
    "leading-xl": ["GothamNarrSSm-Book"],
    "leading-xs": ["GothamNarrSSm-Book", "GothamNarrSSm-Book"],
    "size-2-xl": ["GothamNarrSSm-Book"],
    "size-3-xl": ["GothamNarrSSm-Book"],
    "size-4-xl": ["GothamNarrSSm-Book"],
    "size-5-xl": ["GothamNarrSSm-Book"],
    "size-6-xl": ["GothamNarrSSm-Book"],
    "size-7-xl": ["GothamNarrSSm-Book"],
    "size-base": ["GothamNarrSSm-Book"],
    "size-lg": ["GothamNarrSSm-Book"],
    "size-sm": ["GothamNarrSSm-Book"],
    "size-xl": ["GothamNarrSSm-Book"],
    "size-xs": ["GothamNarrSSm-Book"],
  },
  fontWeight: {
    "font-weight-book": 300,
    "font-weight-extralight": 300,
    "font-weight-light": 300,
    "leading-2-xl": 300,
    "leading-3-xl": 300,
    "leading-4-xl": 300,
    "leading-5-xl": 300,
    "leading-6-xl": 300,
    "leading-base": 300,
    "leading-lg": 300,
    "leading-sm": 300,
    "leading-xl": 300,
    "leading-xs": 300,
    "size-2-xl": 300,
    "size-3-xl": 300,
    "size-4-xl": 300,
    "size-5-xl": 300,
    "size-6-xl": 300,
    "size-7-xl": 300,
    "size-base": 300,
    "size-lg": 300,
    "size-sm": 300,
    "size-xl": 300,
    "size-xs": 300,
    "font-weight-medium": 500,
    "font-weight-bold": 700,
    "font-weight-black": 900,
  },
};

module.exports = extend;
