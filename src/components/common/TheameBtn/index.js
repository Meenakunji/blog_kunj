import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleThemeBtn = ({ theme }) => {
  return (
    <>
      {!!theme && (
        <IconButton sx={{ ml: 1 }} color="inherit">
          {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      )}
    </>
  );
};

export default ToggleThemeBtn;
