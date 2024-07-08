import React from "react";

const TextField = ({
  label,
  name,
  register,
  rules,
  errors,
  placeholder,
  className,
  type = "text",
  // onChange,
}) => {
  // const handleChange = (e) => {
  //   if (onChange) {
  //     onChange(e.target.value);
  //   }
  // };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(`${name}`, rules)}
        placeholder={placeholder}
        className={className}
        type={type}
        // onChange={handleChange}
      />
      {errors?.[name] && (
        <span style={{ color: "red", position: "absolute", bottom: "auto", left: "0" }}>
          {errors[name].message}
        </span>
      )}
    </>
  );
};

export default TextField;
