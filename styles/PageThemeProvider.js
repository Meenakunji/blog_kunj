import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../src/redux/slices/layout";
import { darkTheme, lightTheme } from "./theme";
import React from "react";

const PageThemeProvider = ({ app, children }) => {
  const { theme } = app || {};
  const [themeMode, setThemeMode] = useState(theme);

  const { theme: appTheme } = useSelector((state) => state.layout);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!appTheme) {
      setThemeMode(appTheme);
    }
  }, [appTheme]);

  useEffect(() => {
    if (theme) {
      dispatch(setTheme(theme));
    }
  }, []);

  const themeConfig = themeMode === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
