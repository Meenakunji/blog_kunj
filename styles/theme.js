import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  // palette: {
  //   mode: "dark",
  //   custom: {
  //     white: "#fff",
  //     ebony: "#0C091B",
  //     footerTop: "#2f2f2f",
  //     footer: "#3c3c3c",
  //     PrimaryBgColor: "#000",
  //   },
  //   background: {
  //     bannerGradient:
  //       "linear-gradient(269.1deg, rgb(12 10 29 / 0%) 9.11%, rgb(12 10 29 / 55%) 34.69%, #0c091b 58.04%)",
  //     bannerGradientBottom:
  //       "linear-gradient(180deg, rgba(12, 10, 29, 0) 0%, #0c091b 45.57%)",
  //     bannerGradientMobile:
  //       "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsl(0,0%,8%,.35) 29%,hsl(0,0%,8%,.58) 44%,#0b0819 68%,#0b0818)",
  //     levelBg: "linear-gradient(transparent, rgb(22, 19, 45))",
  //     headerSectionLight:
  //       "linear-gradient(rgb(255 255 255 / 48%),rgb(12 9 27))",
  //     wonRewardBg: "linear-gradient(180deg, #222A49 0%, #191E36 100%);",
  //     commonButtonGradientBg:
  //       "linear-gradient(90.52deg, #E14084 4.01%, #3454FA 57.04%, #54B5BB 103.77%)",
  //   },
  //   boxShadow: {
  //     wonRewardBgShadow: "inset 0px 2px 4px #384056",
  //   },
  // },
});

const lightTheme = createTheme({
  // palette: {
  //   mode: "light",
  //   custom: {
  //     white: "#171527",
  //     ebony: "#fff",
  //     footerTop: "#f0f0f0",
  //     footer: "#e9e9e9",
  //     PrimaryBgColor: "#fff",
  //   },
  //   background: {
  //     bannerGradient:
  //       "linear-gradient(269.1deg, rgb(255 255 255 / 0%) 9.11%, rgb(255 255 255 / 55%) 34.69%, #f6f6f6 58.04%)",
  //     bannerGradientBottom:
  //       "linear-gradient(180deg, rgba(12, 10, 29, 0) 0%, #f4f6fa 45.57%)",
  //     bannerGradientMobile:
  //       "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsl(0deg 0% 96.85% / 15%) 15%,hsl(0deg 0% 86.54% / 35%) 29%,hsl(0deg 0% 87.69% / 74%) 44%,#f4f6fa 68%,#f4f6fa)",
  //     levelBg: "linear-gradient(transparent,#f4f6fa)",
  //     headerSectionLight:
  //       "linear-gradient(rgb(255 255 255 / 48%),rgb(244 244 244))",
  //     wonRewardBg: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
  //     commonButtonGradientBg:
  //       "linear-gradient(90.52deg, #E14084 4.01%, #3454FA 57.04%, #54B5BB 103.77%)",
  //   },
  //   boxShadow: {
  //     wonRewardBgShadow: "inset 0px 2px 4px #ffffff",
  //   },
  // },
});

let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      xm: 375,
      mobile: 480,
      tablet: 768,
      laptop: 1024,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    font: {
      montserrat: {
        fontFamily: ["Poppins", "sans-serif"].join(", "),
      },
      openSans: {
        fontFamily: ["Open Sans", "sans-serif"].join(", "),
      },
    },
  },
});

const customTypography = {
  primaryBackground: {
    background:
      "linear-gradient(90.48deg, rgba(225, 64, 132, 0.1) 3.73%, rgba(52, 84, 250, 0.1) 53.09%, rgba(84, 181, 187, 0.1) 96.58%)",
    filter: "blur(234px)",
  },
  primaryBtn: {
    background: "linear-gradient(90.48deg, #E14084 3.73%, #3454FA 53.09%, #54B5BB 96.58%)",
  },
  disabledBtn: {
    background: "linear-gradient(90.52deg, #C4C4C4 4.01%, #C4C4C4 57.04%, #B0B0B0 103.77%)",
  },
  h1: {
    fontSize: "42px",
    fontWeight: 700,
    lineHeight: "54px",
  },
  h2: { fontSize: "36px", fontWeight: 700, lineHeight: "42px" },
  h3: { fontSize: "24px", fontWeight: 600, lineHeight: "32px" },
  h4: { fontSize: "20px", fontWeight: 400, lineHeight: "28px" },
};

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    ...customTypography,
  },
};

export default theme;

export { lightTheme, darkTheme };
