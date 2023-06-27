import { Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./styles";
import HomeBanner from "../../common/HomeBanner";

const BlogCreate = () => {
  return (
    <>
      <HomeBanner />
      <div className="container">
        <div className="row mt-5">
          <Box sx={style.formSection}>
            <h1>Blog Modal</h1>
            <form>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <textarea type="text" id="name" placeholder="Name" />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
                <Box sx={style.formgroup}>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Name" />
                </Box>
              </Box>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
};

export default BlogCreate;
