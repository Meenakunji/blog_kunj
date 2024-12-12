import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArchiveIcon from "@mui/icons-material/Archive";

const ArchiveSection = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const archives = [
    {
      month: "January 2024",
      posts: ["New Year's Resolutions", "Tech Trends in 2024", "Fitness Goals"],
    },
    {
      month: "December 2023",
      posts: ["Year in Review", "Holiday Special", "Top Recipes of 2023"],
    },
    {
      month: "November 2023",
      posts: ["Black Friday Deals", "Thanksgiving Recipes", "November Highlights"],
    },
    {
      month: "October 2023",
      posts: ["Halloween Ideas", "Fall Recipes", "Autumn Travel Destinations"],
    },
    {
      month: "September 2023",
      posts: ["Back to School Tips", "Autumn Gardening", "Fall Fitness Routines"],
    },
    {
      month: "August 2023",
      posts: ["Summer Memories", "Beach Travel Tips", "August Reads"],
    },
    {
      month: "July 2023",
      posts: ["Fourth of July Special", "Summer Recipes", "Vacation Planning"],
    },
  ];

  return (
    <Box
      p={4}
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Archive Section
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Explore posts from previous months and revisit your favorite topics or discover something
        new.
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <List>
        {archives.map((archive, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleToggle(index)}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: "4px",
                marginBottom: "8px",
              }}
            >
              <ListItemText primary={archive.month} />
              <IconButton sx={{ color: "#ffffff" }}>
                {open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItem>
            <Collapse in={open === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {archive.posts.map((post, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      pl: 4,
                      backgroundColor: "#2e2e2e",
                      marginBottom: "4px",
                      borderRadius: "4px",
                    }}
                  >
                    <ListItemText primary={post} />
                    <IconButton edge="end" sx={{ color: "#ff9800" }} title="Archive Post">
                      <ArchiveIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
      <Box mt={4}>
        <Typography variant="h6">Insights:</Typography>
        <Typography variant="body2" paragraph>
          Use this archive to keep track of your blog&apos;s history and make it easier for users to
          discover older, relevant content. Highlight key posts or include descriptions to capture
          attention.
        </Typography>
        <Typography variant="body2" paragraph>
          Consider tagging posts by category or importance to improve navigation. You could also add
          a search feature or filters for enhanced user experience.
        </Typography>
        <Typography variant="body2">
          Feature highlighted posts or milestones for quick access to significant events and popular
          content.
        </Typography>
      </Box>
    </Box>
  );
};

export default ArchiveSection;
