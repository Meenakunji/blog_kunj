const style = {
  container: {
    display: "flex",
    backgroundColor: "#fff",
    color: "#000",
    flexDirection: "column",
    "& h5": {
      fontSize: "32px",
      fontWeight: "600",
      marginBottom: "40px",
      textAlign: "center",
      backgroundImage: "linear-gradient(60deg, #0b763e, #FFB03A)",
      backgroundClip: "text",
      color: "transparent",
    },
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    marginBottom: "105px",
  },
  tagSliderCss: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    whiteSpace: "nowrap",
  },
  exploreTopicsDetailsConatiner: {
    display: "flex",
    textAlign: "center",
    color: "#000",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "70px",
  },
  tagRecommandConatiner: {
    display: "flex",
    flexWrap: "wrap",
    cursor: "pointer",
    "& > .MuiBox-root": {
      width: "calc(33.33% - 10px)",
      marginRight: "10px",
      marginBottom: "20px",
      "&:nth-child(3n)": {
        marginRight: "0",
      },
    },
    "& h1": {
      fontSize: "24px",
      fontWeight: "600",
    },
    "& a": {
      fontWeight: "bold",
      color: "#108763",
      fontSize: "18px",
    },
  },
  sliderCSS: {
    position: "relative",
    display: "block",
    maxWidth: "1248px",
    padding: "25px 0 25px 15px",
    left: "10%",
    marginBottom: "100px",

    "& .slick-slide": {
      width: "180px !important",
    },
    "& .slick-slider .slick-prev:before, & .slick-slider button.slick-prev": {
      content: "''",
      width: "18px",
      height: "32px",
      background: "center/contain no-repeat url(/images/home/banner-prev.svg)",
      left: "-60px",
      zIndex: "1",
    },
    "& .slick-slider .slick-next:before, & .slick-slider button.slick-next": {
      content: "''",
      width: "18px",
      height: "32px",
      background: "center/contain no-repeat url(/images/home/banner-next.svg)",
      right: "-60px",
      zIndex: "1",
    },
    "& .slick-slider .slick-dots li button:before": {
      fontSize: "12px",
      color: "#fff",
      opacity: "1",
    },
    "& .slick-slider .slick-dots li.slick-active button:before": {
      fontSize: "14px",
      color: "#e91e63",
      opacity: "1",
    },
  },
  blogSliderTagcss: {
    width: "180px !important",
    whiteSpace: "nowrap",
  },
};

export default style;
