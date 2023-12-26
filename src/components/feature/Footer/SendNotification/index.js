import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "../style";
import { API_BASE_URL } from "../../../../constant/appConstants";

export const FooterSendNotification = () => {
  const [email, setEmail] = useState("");

  const sendNotification = async (email) => {
    try {
      const requestBody = {
        email: email,
      };

      const response = await fetch(`${API_BASE_URL}/v1/auth/notify-users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received data:", data);
        setEmail("");
        // Handle the data received from the API
      } else {
        throw new Error("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error.message);
      // Handle errors here, like showing an error message
    }
  };

  const handleSubscibeEmail = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      await sendNotification(email);
    } catch (error) {
      console.error("Error:", error.message);
      // Handle errors here, like showing an error message
    }
  };

  return (
    <Box sx={style.newLatter}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid xs={6}>
            <Box sx={style.newLatterSection}>
              <Typography variant="h6">
                Get our stories delivered From us
                <br /> to your inbox weekly.
              </Typography>
              <form>
                <input
                  type="text"
                  placeholder="Your Email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e?.target?.value);
                  }}
                />
                <Button onClick={handleSubscibeEmail}>Get started</Button>
              </form>
              <Typography variant="body1">
                Sahitya: Your go-to blogging website for sharing ideas, stories,
                and experiences with a vibrant community of writers and readers.
                Unleash your creativity and connect with like-minded individuals
                at Sahitya.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box sx={style.bestWeek}>
              <Box sx={style.bestWeekBox}>
                <img src="/images/home/Base.jpg" alt="" />
                <Box sx={style.bestWeekDetails}>
                  <Typography variant="h5">
                    The best aticles every week
                  </Typography>
                  <Typography variant="body1">
                    Our insurance plans offers are priced the same everywhere
                    else.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
