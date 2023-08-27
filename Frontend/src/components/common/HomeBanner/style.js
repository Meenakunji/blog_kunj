const style = {
  homeBanner: {
    background: "#c3c3c3",
    height: "350px",
    background: "url('/images/home/blog.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    textAlign: "center",
    "& .Typewriter__wrapper": {
      color: "#fff",
      top: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: "50%",
      fontSize: "45px",
      zIndex: "1",
    },
    "& .Typewriter__cursor": {
      display: "none",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      background: "rgb(6 5 5 / 54%)",
      width: "100%",
      height: "100%",
      left: "0",
      right: "0",
      top: "0",
    },
  },
};
export default style;
