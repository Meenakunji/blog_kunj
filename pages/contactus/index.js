import React from "react";
import { TextField, Button, Typography, Grid, Box, Container, Paper, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn } from "@mui/icons-material";
import Map from "../../src/components/common/Map";

const ContactPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Contact Us
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", maxWidth: "800px" }}>
        We are here to assist you! Feel free to reach out with any questions or feedback, and we
        will get back to you as soon as possible.
      </Typography>

      {/* Contact Form Section */}
      <Container sx={{ marginTop: "40px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                backgroundColor: "#1a1a1a",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
                Send Us a Message
              </Typography>
              <form>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#333", input: { color: "white" } }}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#333", input: { color: "white" } }}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#333", input: { color: "white" } }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  sx={{ backgroundColor: "#333", input: { color: "white" } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "#1f80d1",
                    "&:hover": {
                      backgroundColor: "#15659e",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Location Section */}
      <Container sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
          Our Location
        </Typography>
        <Box sx={{ marginBottom: "20px" }}>
          <LocationOn sx={{ fontSize: 30, color: "#e91e63" }} />
        </Box>
        <Typography variant="body1" sx={{ color: "white", maxWidth: "600px", margin: "auto" }}>
          1234 Some Street, Some City, Some Country
        </Typography>
        {/* Assuming you have a Map component */}
        <Map location={{ lat: 40.748817, lng: -73.985428 }} zoom={12} />
      </Container>

      {/* FAQ Section */}
      <Container sx={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "8px" }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            How can I contact support?
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            You can contact us via email or by using the contact form above.
          </Typography>
          <Divider sx={{ marginY: "10px" }} />
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            What is the response time?
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            We usually respond within 24 hours, excluding weekends and holidays.
          </Typography>
        </Box>
      </Container>

      {/* Testimonial Section */}
      <Container sx={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
          What Our Clients Say
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Paper sx={{ padding: "20px", backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              &quot;This service has been incredible! I got all the support I needed and more.
              Highly recommend!&quot;
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", marginTop: "10px" }}>
              - Pankaj Kumar Meena, CEO of Company Sahitya
            </Typography>
          </Paper>
          <Paper sx={{ padding: "20px", backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              &quot;Fast and efficient. The team is knowledgeable and always ready to assist!&quot;
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", marginTop: "10px" }}>
              - Pankaj Kumar Meena, Founder of Startup SmartShield
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Social Media Section */}
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
          Connect with us on social media
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Facebook sx={{ fontSize: 30, color: "#4267B2" }} />
          <Twitter sx={{ fontSize: 30, color: "#1DA1F2" }} />
          <Instagram sx={{ fontSize: 30, color: "#C13584" }} />
          <LinkedIn sx={{ fontSize: 30, color: "#0077B5" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
