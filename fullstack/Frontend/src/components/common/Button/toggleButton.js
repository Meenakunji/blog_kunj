import { Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleThemeBtn = ({ theme }) => {
  console.log("theme", theme);
  return (
    <>
      {!!theme && (
        <>
          {theme === "dark" ? (
            <Button>
              <LightModeIcon style={{ width: "19px" }} />
              Light
            </Button>
          ) : (
            <Button>
              <DarkModeIcon style={{ width: "19px" }} />
              Dark
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default ToggleThemeBtn;
