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
  Button,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";

export const ArtistBlogDetailsGraph = ({ topArtistData }) => {
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
            {topArtistData?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={row?.postPic}
                      alt={row?.title}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Typography variant="body1">{row?.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    style={{ display: "flex", alignItems: "center", width: "100px" }}
                  >
                    {moment(row?.postDate).format("DD MMM YYYY")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      border: "1px solid green",
                      padding: "10px 20px",
                      backgroundImage:
                        "linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%)",
                      margin: "10px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      transition: "background-position 0.5s ease",
                      backgroundSize: "200% auto",
                      color: "white",
                      boxShadow: "0 0 20px #eee",
                      borderRadius: "10px",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "&:hover": {
                        backgroundPosition: "right center",
                        color: "#fff",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {row?.category}
                  </Button>
                </TableCell>
                <TableCell>{row?.totalComments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
