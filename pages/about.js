import React, { useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";
import style from "../components/About/style";
import { AboutComponent } from "../components/About";
import { API_BASE_URL } from "../src/constant/appConstants";

const About = () => {
  const [aboutAPIResult, setAboutAPIResult] = useState();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const resp = await fetch(`${API_BASE_URL}/v1/home/about-us`);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();
        setAboutAPIResult(result?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAboutData();
  }, []);

  const memoizedAboutComponent = useMemo(
    () => <AboutComponent aboutAPIResult={aboutAPIResult} />,
    [aboutAPIResult]
  );

  return <Box sx={style.container}>{memoizedAboutComponent}</Box>;
};

export default About;
