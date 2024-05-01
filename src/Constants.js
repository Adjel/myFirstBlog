const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1500,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletToUP: `min-width: ${BREAKPOINTS.tabletMin / 16}rem`,
  laptopToUp: `min-width: ${BREAKPOINTS.laptopMin / 16}rem`,
  desktopToUp: `min-width: ${BREAKPOINTS.desktopMin / 16}rem`,
};

export const COLORS = {
  Gray: {
    lightGray: "hsl(0 0 180)",
    buttonLightGray: "hsl(0 0 96)",
    buttonDarkGray: "hsl(0 0 40)",
    mediumGray: "hsl(0 0 65)",
    darkGray: "hsl(0 0 60)",
  },
  pimary: "hsl(37 45 54)",
};

export const FONTWEIGHT = {
  normal: "400",
  bold: "700",
};

export const FONTFAMILY = {
  Lato: "Lato",
};

export const FONTSIZE = {
  small: `${10 / 16}rem`,
  button: `${11 / 16}rem`,
  button: `${11 / 16}rem`,
  optional: `${12 / 16}rem`,
  menu: `${13 / 16}rem`,
  parags: `${16 / 16}rem`,
  title: `${17 / 16}rem`,
  h1: `${24 / 16}rem`,
  h2: `${18 / 16}rem`,
  h3: `${20 / 16}rem`,
};
