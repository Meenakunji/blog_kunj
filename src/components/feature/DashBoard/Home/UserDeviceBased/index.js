import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// Example data for the pie chart
const data = [
  { name: "Mobile", value: 400 },
  { name: "Tablet", value: 300 },
  { name: "Desktop", value: 300 },
  { name: "Others", value: 200 },
];

// Define colors for each slice
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const UserDeviceBased = () => {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <PieChart width={400} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  );
};
