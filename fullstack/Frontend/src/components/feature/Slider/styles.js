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
};
export default styles;
