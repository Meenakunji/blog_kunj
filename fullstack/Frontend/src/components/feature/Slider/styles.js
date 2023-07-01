const styles = {
  sliderSection: {
    "& .slick-dots": {
      bottom: "10px",
      "& li": {
        width: "15px",
        "& button": {
          "&::before": {
            fontSize: "15px",
          },
        },
      },
    },
    "& .slick-next": {
      right: "0",
    },
    "& .slick-prev": {
      left: "0",
      zIndex: "9",
    },
  },

  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    width: "100%",
    margin: "0",
    padding: "0",
  },

  description: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    fontSize: "1rem",
    width: "100%",
    margin: "0",
    padding: "0",
  },
};
export default styles;
