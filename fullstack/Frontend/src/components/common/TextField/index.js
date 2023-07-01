import { Box } from "@mui/material";
import get from "lodash/get";

const TextField = ({ label, name, register, rules, errors, placeholder }) => {
  return (
    <>
      <Box>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name}
          {...register(`${name}`, rules)}
          placeholder={placeholder}
        />
      </Box>
    </>
  );
};

export default TextField;
