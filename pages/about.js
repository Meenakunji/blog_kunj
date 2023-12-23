import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import style from "../components/About/style";
import { AboutComponent } from "../components/About";
import { API_BASE_URL } from "../src/constant/appConstants";

export default function About() {
  const [aboutAPIResult, setAboutAPIResult] = useState();

  useEffect(() => {
    const aboutData = async () => {
      try {
        const resp = await fetch(`${API_BASE_URL}/v1/home/about-us`);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();
        setAboutAPIResult(result?.data);
      } catch (err) {
        alert(err?.response?.data?.message);
      }
    };c

    aboutData();
  }, []);

  return (
    <Box sx={style.container}>
      <AboutComponent aboutAPIResult={aboutAPIResult} />
    </Box>
  );
}
