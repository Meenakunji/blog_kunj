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

  blogSliderTagcss: {
    whiteSpace: "nowrap",
    "& button": {
      border: "1px solid #e2e2e2",
      borderRadius: "100px",
      whiteSpace: "nowrap",
      fontSize: "13px",
      padding: "7px 25px",
      fontWeight: "700",
      lineHeight: "1.9",

      height: "40px",
    },
  },
  slideList: {
    position: "relative",
    "& .slick-prev": {
      width: "29px",
      height: "27px",
      "&:before": {
        color: "black",
        fontSize: "30px",
      },
    },
    "& .slick-next": {
      width: "29px",
      height: "27px",
      "&:before": {
        color: "black",
        fontSize: "30px",
      },
    },
    "&:before": {
      content: "''",
      background:
        "linear-gradient(to left,var(--yt-spec-base-background) 20%,rgba(255,255,255,0) 80%)",
      width: "100px",
      height: "100px",
      position: "absolute",
      right: "0",
      top: "0",
    },
  },
  SearchBarSection: {
    marginTop: "50px",
    marginBottom: "40px",
    "& h5": {
      marginBottom: "10px",
      textAlign: "center",
    },
  },
  blogTittleAndSubTittle: {
    "& h1": {
      marginBottom: "20px",
      fontSize: "20px",
      textAlign: "center",
      fontWeight: "400 !important",
    },
    width: "20%",
    marginBottom: "15px",
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
      margin: "0",
      "& li": {
        marginBottom: "10px",
        "& a": {
          textDecoration: "none",
          border: "1px solid #ede7e7",
          padding: "4px 22px",
          display: "inline-block",
          borderRadius: "31px",
          color: "#646464",
          fontSize: "13px",
          "&:hover": {
            backgroundColor: "#000",
            border: "1px solid #ede7e7",
            color: "#fff",
          },
        },
      },
    },
  },
  blogGrid: {
    display: "flex",
    flexWrap: "wrap",
  },
  showMoreBtn: {
    color: "#1A8917",
    textTransform: "lowercase",
    textAlign: "center",
    cursor: "pointer",
  },
};

export default style;
