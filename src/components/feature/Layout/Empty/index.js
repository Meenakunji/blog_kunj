import { Box } from "@mui/system";
import HeaderComponent from "../../Header";
import style from "../style";

const EmptyLayout = ({ children, customStyles = {} }) => {
  return (
    <Box sx={{ ...style.wrapper, ...customStyles.wrapper }}>
      <HeaderComponent />
      <Box sx={{ minHeight: "100vh", marginBottom: "20px" }}>{children}</Box>
    </Box>
  );
};

export default EmptyLayout;
