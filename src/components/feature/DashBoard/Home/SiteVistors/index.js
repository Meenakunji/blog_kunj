import { Box, Select, MenuItem, Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const SiteVistorsComponent = () => {
  const [selectedOption, setSelectedOption] = React.useState("option1");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Sample data for the graph
  const data = [
    { name: "Jan", visitors: 4000 },
    { name: "Feb", visitors: 3000 },
    { name: "Mar", visitors: 5000 },
    { name: "Apr", visitors: 4000 },
    { name: "May", visitors: 6000 },
    { name: "Jun", visitors: 7000 },
  ];

  return (
    <Box sx={{ position: "relative", padding: 2 }}>
      {/* Dropdown */}
      <Box sx={{ position: "absolute", top: 0, right: 0, p: 1 }}>
        <Select value={selectedOption} onChange={handleChange} sx={{ width: 150 }}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </Box>

      {/* Graph Section */}
      <Box sx={{ paddingTop: 6 }}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: "#fff" }}>
          Site Visitors
        </Typography>
        <Box
          sx={{
            height: 300,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};
