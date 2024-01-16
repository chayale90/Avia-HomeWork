import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "inherit",
      h1: {
        fontSize: "3rem",
        fontWeight: 400,
      },
      h2: {
        fontSize: "2.5rem",
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
        fontWeight: 500,
      },
      h3: {
        fontSize: "2rem",
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
        fontWeight: 500,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      h5: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      h6: {
        fontSize: "0.5rem",
        fontWeight: 400,
        textUnderlineOffset: 2.5 ,
        "&:hover":{
          textDecoration:"underline",
        }   
      },
      strong: {
        fontWeight: 500,
      },
    },
    palette: {
      //green
      primary: {
        main: "#155E64",
      },
      //blue
      secondary: {
        main: "#4169e1",
      },
      danger: {
        main: "#860A35",
      },
      success: {
        main: "#FFFFFF",
      },
      darkMode: {
        main: "#4a4848",
      },
      lightMode: {
        main: "#faf8eb",
      },
      purple: {
        main: "#800080",
      },
      brown: {
        main: "#964B00",
      },
      orange: {
        main: "#FFA500",
      },
      cream: {
        main: "#FAF8EB",
      },
    },
    direction: "rtl",
    textField: {
      xSmallTextField: {
        width: "20%", 
      },
      smallTextField: {
        width: "35%", 
        '@media (max-width:600px)': {
          width: "40%",
        },
      },
      bigTextField: {
        width: "40%", 
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
          sx: {
            textUnderlineOffset: 2.5,
            textDecoration: 'none',
          },
        },
      },
    },
  })
);
