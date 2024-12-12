import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    Chip,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    Switch,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import React, { useState } from "react";

const BlogDashboardSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [editorSettings, setEditorSettings] = useState({
    fontSize: 14,
    lineHeight: 1.6,
    spellCheck: true,
  });
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["Technology", "Health", "Education", "Travel", "Finance"];

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleEditorSettingChange = (field, value) => {
    setEditorSettings({ ...editorSettings, [field]: value });
  };

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      p={4}
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Blog Dashboard Settings
      </Typography>

      <Divider sx={{ marginBottom: 2 }} />

      <Grid container spacing={4}>
        {/* General Settings */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            General Settings
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel sx={{ color: "#fff" }}>Language</InputLabel>
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
            </Select>
          </FormControl>

          <Tooltip title="Enable or disable notification emails" arrow>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={handleNotificationChange}
                  sx={{
                    "& .MuiSwitch-thumb": {
                      backgroundColor: "#ff9800",
                    },
                  }}
                />
              }
              label="Enable Notifications"
            />
          </Tooltip>
        </Grid>

        {/* Editor Settings */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Editor Settings
          </Typography>

          <TextField
            label="Font Size"
            type="number"
            fullWidth
            margin="normal"
            value={editorSettings.fontSize}
            onChange={(e) => handleEditorSettingChange("fontSize", parseInt(e.target.value))}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />

          <TextField
            label="Line Height"
            type="number"
            fullWidth
            margin="normal"
            value={editorSettings.lineHeight}
            onChange={(e) => handleEditorSettingChange("lineHeight", parseFloat(e.target.value))}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />

          <Tooltip title="Toggle spell-checking while editing" arrow>
            <FormControlLabel
              control={
                <Switch
                  checked={editorSettings.spellCheck}
                  onChange={(e) => handleEditorSettingChange("spellCheck", e.target.checked)}
                  sx={{
                    "& .MuiSwitch-thumb": {
                      backgroundColor: "#ff9800",
                    },
                  }}
                />
              }
              label="Enable Spell Check"
            />
          </Tooltip>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        {/* SEO Settings */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            SEO Settings
          </Typography>

          <TextField
            label="SEO Title"
            fullWidth
            margin="normal"
            placeholder="Enter a catchy title for search engines"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />

          <TextField
            label="SEO Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            placeholder="Provide a concise description for SEO"
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            sx={{
              backgroundColor: "#333",
              input: { color: "#fff" },
            }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        {/* Categories */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Blog Categories
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{ color: "#fff" }}>Select Categories</InputLabel>
            <Select
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              sx={{
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        {/* Help Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Need Help?
          </Typography>
          <Accordion sx={{ backgroundColor: "#333", color: "#fff" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
              <Typography>How to configure notifications?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Go to General Settings and toggle the `Enable Notifications`` switch.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "#333", color: "#fff" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
              <Typography>What are SEO settings?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                SEO settings help optimize your blog for search engines. Fill in the SEO title and
                description to improve visibility.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 4 }} />

      {/* Actions */}
      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          sx={{
            margin: 2,
            backgroundColor: "#1e88e5",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Save Settings
        </Button>
        <Button
          variant="outlined"
          sx={{
            margin: 2,
            borderColor: "#ff9800",
            color: "#ff9800",
            "&:hover": {
              backgroundColor: "rgba(255, 152, 0, 0.1)",
            },
          }}
        >
          Reset to Defaults
        </Button>
      </Grid>
    </Box>
  );
};

export default BlogDashboardSettings;
