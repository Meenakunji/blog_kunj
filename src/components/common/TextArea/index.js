import { Box } from "@mui/material";
import React from "react";

const TextArea = ({ label, name, rows = 4, register, rules, errors }) => {
  return (
    <>
      <Box>
        <label htmlFor={name}>{label}</label>
        <textarea id={name} rows="4" {...register(`${name}`, rules)} />
      </Box>
    </>
  );
};

export default TextArea;
