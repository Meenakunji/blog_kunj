import { Box } from "@mui/system";
import HeaderComponent from "../../Header";
import style from "../style";

const EmptyLayout = ({ children, customStyles = {} }) => {
  return (
    <Box sx={{ ...style.wrapper, ...customStyles.wrapper, ...style.headerChangecolor }}>
      <HeaderComponent />
      <Box>{children}</Box>
    </Box>
  );
};

export default EmptyLayout;
