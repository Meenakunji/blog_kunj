import { Box } from "@mui/material";
import get from "lodash/get";

const TextField = ({
  label,
  name,
  register,
  rules,
  errors,
  placeholder,
  className,
  type = "text",
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(`${name}`, rules)}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </>
  );
};

export default TextField;
