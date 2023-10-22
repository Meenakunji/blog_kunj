const style = {
  featuredSongsSection: {
    backgroundColor: "#fff",
    width: "100%",
    margin: "auto",
    height: "100%",
    marginTop: "90px",
  },
  featuredRow: {
    position: "relative",
    display: "flex",
    alignItems: "start",
    background: "#8bb7de",
  },
  navTabContainer: {
    position: "relative",
    display: "block",
    width: "100%",
    height: "100%",
    maxWidth: "25%",
    minWidth: "230px",
    padding: "50px 15px",
  },
  tabContentContainer: {
    position: "relative",
    display: "block",
    width: "100%",
    minHeight: "80vh",
    padding: "25px 21px",
    background: "#0d2436",
    overflowY: "auto",
  },
  tab: {
    position: "relative",
    display: "flex !important",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 17px",
    width: "100%",
    borderRadius: "12px",
    color: "rgba(33, 53, 84, 0.67) !important",
    flexDirection: "row",
    "& img": {
      margin: "0",
    },
    "&.Mui-selected": {
      background: "#5EDFC5",
      color: "#000 !important",
    },
  },
  compliance_page: {
    fontFamily: "Lato, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
  },
  compliance_content: {
    background: "#ffffff",
    borderRadius: "32px 32px 0 0",
    padding: "32px 24px",
  },
  content_container: {
    margin: "initial",
    maxWidth: "initial",
  },
  content_head: {
    fontSize: "24px",
    lineHeight: "30px",
    color: "#213554",
    margin: "0",
    fontWeight: "700",
  },
  content_separator: {
    width: "28px",
    height: "5px",
    backgroundColor: "#213554",
    marginTop: "16px",
  },
  updated_date: {
    margin: "16px 0 0",
    color: "#213554ab",
    fontWeight: 700,
    fontSize: "16px",
  },
  content_text: {
    margin: "16px 0 0",
    color: "#213554ab",
    fontSize: "14px",
    lineHeight: "20px",
  },
};

export default style;
