import { Box } from "@mui/material";
import { default as NextImage } from "next/image";
import React from 'react';

const UpdateImage = ({ src, alt, customStyles = {}, ...rest }) => {
  return (
    <Box
      sx={{
        position: "relative",
        ...customStyles,
      }}
    >
      <NextImage src={src} alt={alt} fill={true} {...rest} />
    </Box>
  );
};

export default UpdateImage;
