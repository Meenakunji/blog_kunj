const style = {
  mainContainer: {
    // color: "red",
    "& h5": {
      fontSize: "18px",
      fontWeight: 400,
    },
  },
  blogContainer: {
    width: "80%",
    margin: "auto",
  },
  blogHeading: {
    marginTop: "30px",
    "& h1": {
      fontSize: "40px",
      fontWeight: "700",
      color: "#fff",
      lineHeight: "40px",
    },
  },
  profileBlogDetails: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profileImg: {
    marginTop: "30px",
    "& img": {
      width: "50px",
      height: "50px",
      borderRadius: "100px",
    },
  },
  profileName: {
    display: "flex",
    gap: "15px",
    "& p": {
      fontSize: "14px",
      color: "#fff",
      marginLeft: "10px",
    },
  },
  blogDetails: {
    marginTop: "40px",
  },
  blogImg: {
    "& img": {
      width: "100%",
    },
  },
  blogContent: {
    "& h2": {
      fontSize: "24px",
      color: "#fff",
      fontWeight: "700",
      margin: "30px 0",
    },
    "& p": {
      fontSize: "15px",
      margin: "30px 0",
      fontWeight: "300",
      color: "#bebebe",
    },
  },

  userDetails: {
    borderBottom: "1px solid #2b2b2b",
    borderTop: "1px solid #2b2b2b",
    marginTop: "30px",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    justifyContent: "space-between",
  },
  userBlog: {
    display: "flex",
    gap: "15px",
    "& p": {
      fontSize: "13px",
      color: "#959595",

      "& svg": {
        fontSize: "18px",
        marginRight: "5px",
      },
    },
  },
  codeSection: {
    background: "#333333",
    border: "1px solid #555555",
    padding: "25px",
    maxWidth: "70%",
    margin: "30px auto",
  },
};

export default style;
