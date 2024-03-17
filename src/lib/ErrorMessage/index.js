import React from "react";

export const ErrorMessage = ({ message }) => {
  return (
    <span style={{ color: "red", position: "absolute", bottom: "auto", left: "0" }}>{message}</span>
  );
};
