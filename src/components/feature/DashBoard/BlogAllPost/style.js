const styles = {
  blogContainer: {
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    overflow: "hidden",
    cursor: "pointer",
    background: "#fff",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "& h2": {
      fontSize: "18px",
      fontWeight: "600",
      color: "#000",
    },
  },
};

export default styles;
