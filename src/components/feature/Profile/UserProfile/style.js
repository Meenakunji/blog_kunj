const styles = {
  aboutSection: {
    backgroundColor: "#f4f4f9",
    padding: "40px 20px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  profileHeader: {
    marginBottom: "30px",
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "0 auto",
    border: "4px solid #007bff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  profileTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#333",
    marginTop: "20px",
  },
  profileSubtitle: {
    fontSize: "1.2rem",
    color: "#666",
    marginTop: "10px",
    lineHeight: "1.6",
  },
  profileContent: {
    textAlign: "left",
    padding: "0 20px",
  },
  profileText: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  socialLinks: {
    marginBottom: "20px",
    "& h4": {
      color: "#14c887",
      fontSize: "26px",
      marginBottom: "10px",
    },
    "& ul": {
      padding: "0",
      margin: "20px 0px",
      display: "flex",
      justifyContent: "space-between",
      "& li": {
        listStyle: "none",
        color: "#14c887",
        fontSize: "30px",
      },
    },
  },
  socialButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  editButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#218838",
    },
  },
};

export default styles;
