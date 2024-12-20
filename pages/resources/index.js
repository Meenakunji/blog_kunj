import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { resources } from "../../utils/common";

export default function ResourcesPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "4rem" }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginBottom: "1.5rem", color: "#ffff" }}>
        Resources
      </Typography>
      <Grid container spacing={4}>
        {resources?.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                  {resource.description}
                </Typography>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    component={Link}
                    href={resource.link}
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
