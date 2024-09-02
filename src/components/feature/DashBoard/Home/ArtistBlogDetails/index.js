import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import React from "react";

export const ArtistBlogDetailsGraph = () => {
  const artistData = [
    {
      imageUrl: "https://i.postimg.cc/XJswXtVS/kalki.jpg",
      title: "Your Rooftop Garden Could Be a Solar",
      postDate: "12 Aug 2023",
      category: "Science",
      commentsCount: 123,
    },
    {
      imageUrl: "https://i.postimg.cc/XJswXtVS/kalki.jpg",
      title: "Your Rooftop Garden Could Be a Solar",
      postDate: "15 Aug 2023",
      category: "Technology",
      commentsCount: 98,
    },
    {
      imageUrl: "https://i.postimg.cc/XJswXtVS/kalki.jpg",
      title: "Your Rooftop Garden Could Be a Solar",
      postDate: "15 Aug 2023",
      category: "Technology",
      commentsCount: 98,
    },
    {
      imageUrl: "https://i.postimg.cc/XJswXtVS/kalki.jpg",
      title: "Your Rooftop Garden Could Be a Solar",
      postDate: "15 Aug 2023",
      category: "Technology",
      commentsCount: 98,
    },
    {
      imageUrl: "https://i.postimg.cc/XJswXtVS/kalki.jpg",
      title: "Your Rooftop Garden Could Be a Solar",
      postDate: "15 Aug 2023",
      category: "Technology",
      commentsCount: 98,
    },
  ];

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Artist Title</TableCell>
              <TableCell>Post Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={row.imageUrl}
                      alt={row.title}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Typography variant="body1">{row.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    style={{ display: "flex", alignItems: "center", width: "100px" }}
                  >
                    {row.postDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    style={{
                      border: "1px solid green",
                      padding: "7px",
                      borderRadius: "29px",
                      background: "#a7e3ef",
                    }}
                  >
                    {row.category}
                  </Typography>
                </TableCell>
                <TableCell>{row.commentsCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
