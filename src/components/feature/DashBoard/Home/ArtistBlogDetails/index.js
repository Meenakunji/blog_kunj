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
                  <Typography
                    variant="body1"
                    style={{
                      border: "1px solid green",
                      padding: "7px",
                      borderRadius: "29px",
                      background: "#a7e3ef",
                    }}
                  >
                    {row?.category}
                  </Typography>
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
