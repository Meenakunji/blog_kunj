import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { UserDetails } from "../UserDeatils";
import style from "../style";
import { EnhancedSearch } from "../../../common/SearchInput";

export const ChatGroup = () => {
  return (
    <Box sx={style.chatgroupConatiner}>
      <Typography>Messages</Typography>
      {/* user input and create group button */}
      <EnhancedSearch />
      <Button
        type="button"
        className="btnPopup"
        // onClick={() => openDrawerCell()}
        style={{ marginBottom: "20px" }}
      >
        + Start a New Chat
      </Button>
      <Box
        style={{
          overflow: "scroll",
          height: "602px",
          overflowX: "hidden",
        }}
      >
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
        <UserDetails />
        <Divider
          style={{ border: "1px solid #a59b9b", marginTop: "10px" }}
        />{" "}
        <UserDetails />
        <Divider
          style={{ border: "1px solid #a59b9b", marginTop: "10px" }}
        />{" "}
        <UserDetails />
        <Divider
          style={{ border: "1px solid #a59b9b", marginTop: "10px" }}
        />{" "}
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
        <UserDetails />
        <Divider style={{ border: "1px solid #a59b9b", marginTop: "10px" }} />
      </Box>
    </Box>
  );
};
