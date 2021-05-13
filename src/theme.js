// import { theme as defaultTheme } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: 0,
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1140px",
    "2xl": " 1920px",
  },
  fontSizes: {
    h1: "56px",
    h1m: "40px",
    h2: "40px",
    h2m: "32px",
    h3: "24px",
    h3m: "24px",
    subtitle: "20px",
    subtitlem: "18px",
    body: "16px",
    caption: "14px",
    button: "18px",
  },
  fonts: {
    heading: "Play, sans-serif",
    body: "Play, sans-serif",
  },
  radii: {
    small: "8px",
    medium: "16px",
    large: "24px",
    circle: "50%",
  },
  lineHeights: {
    body: "24px",
    caption: "16px",
    button: "20px",
    subtitle: "28px",
    subtitlem: "24px",
    h1: "60px",
    h1m: "40px",
    h2: "48px",
    h2m: "32px",
    h3: "32px",
    h3m: "24px",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.16)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.16)",
    large: "0 8px 16px rgba(0, 0, 0, 0.16)",
  },
  colors: {
    basic: ["#FFFFFF", "#F7F7F7", "#E0E0E1", "#E5E5E5", "#7A797C", "#00010D"],
    primary: "#00D8D5",
    secondary: ["#FF4C8B", "#000426", "#000426"],
    alert: {
      error: "#F44336",
      ok: "#0ABF53",
      warn: "#FFEB3B",
    },
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _focus: {
          boxShadow: "none",
          outline: "none",
        },
      },
      defaultProps: {
        activeStyle: { color: "red" },
      },
      variants: {
        footerLink: {
          display: "block",
          mb: 2,
          color: "basic.0",
          _hover: {
            color: "secondary.0",
          },
        },
        headerLink: {
          color: "basic.0",
          _hover: { color: "secondary.0", textDecoration: "none" },
          _activeLink: {
            color: "secondary.0",
            textDecoration: "underline",
          },
        },
        mobileLink: {
          color: "basic.5",
          display: "block",
          _hover: { color: "secondary.0", textDecoration: "none" },
          _activeLink: {
            color: "secondary.0",
            textDecoration: "underline",
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: "basic.5",
        fontSize: "body",
        lineHeight: "body",
        m: 0,
        mb: "20px",
      },
      variants: {
        subtitle: {
          fontSize: ["subtitlem", null, null, "subtitle"],
          fontWeight: "normal",
          lineHeight: ["subtitlem", null, null, "subtitle"],
        },
        caption: {
          fontSize: "caption",
          fontWeight: "normal",
          lineHeight: "caption",
        },
      },
    },
    Heading: {
      baseStyle: { fontWeight: "normal" },
      variants: {
        h1: {
          color: "basic.5",
          fontSize: "h1",
          lineHeight: ["h1m", null, null, "h1"],

          mt: 0,
          mb: 4,
        },
        h2: {
          color: "basic.5",
          fontSize: ["h2m", null, null, "h2"],
          lineHeight: ["h2m", null, null, "h2"],

          mt: 0,
          mb: 3,
        },
        h3: {
          color: "basic.5",
          fontSize: ["h3m", null, null, "h3"],
          lineHeight: ["h3m", null, null, "h3"],
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "3px",
        fontWeight: "bold",
        fontSize: "button",
        lineHeight: "button",
        fontFamily: "main",

        outline: 0,
        px: "24px",
        py: "14px",
        color: "basic.0",
        bg: "secondary.0",
        transition: "background-color 0.3s ease",
        _hover: {
          bg: "primary",
          textDecoration: "none",
        },
      },
      sizes: {
        standart: { h: "40px", minW: "130px" },
      },
      defaultProps: {
        size: "standart",
      },
      variants: {
        secondary: {
          color: "basic.0",
          backgroundColor: "secondary.0",
        },
      },
    },
  },
});
export default theme;
