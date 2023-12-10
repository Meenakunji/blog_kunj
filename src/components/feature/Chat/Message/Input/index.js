import { Box, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import style from "../style";

export const MessageInputsection = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e?.target.value);
  };
  return (
    <Box sx={style.useInputSection}>
      <textarea
        placeholder="Enter your message..."
        value={text}
        onChange={handleTextChange}
      />
      <Box sx={style.buttonSection}>
        <Box style={{ display: "flex", gap: "20px" }}>
          <Image
            alt="play"
            src="/images/home/vCall.svg"
            width={15}
            height={15}
          />
          <Image
            alt="attchement "
            src="/images/home/mice.svg"
            width={15}
            height={15}
            style={{ marginLeft: "8px" }}
          />
          <Image
            alt="attchement "
            src="/images/home/emoji.svg"
            width={15}
            height={15}
            style={{ marginLeft: "8px" }}
          />
          <Image
            alt="attchement "
            src="/images/home/fileAttachement.svg"
            width={15}
            height={15}
            style={{ marginLeft: "8px" }}
          />

          <Image
            alt="file upload "
            src="/images/home/fileupload.svg"
            width={15}
            height={15}
            style={{ marginLeft: "8px" }}
          />
        </Box>

        <Box>
          <Image
            alt="send button "
            src="/images/home/sendBtn.svg"
            width={15}
            height={15}
            style={{ marginLeft: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
