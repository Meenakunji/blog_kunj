const styles = {
    profileRight: {
        textAlign: "center",
        "& img": {
            width: "120px",
            borderRadius: "100px",
            height: "120px",
        }
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",  
        marginTop: "30px",
    },
    followBtn: {
        background: "#A5CC51",
        borderRadius: "4px",
        color: "#FFF",
        fontSize: "12px",
        width: "100px",
        "&:hover": {
            background: "#A5CC51", 
        }
    },
    subscribe:{
        borderRadius: "4px",
        border: "1px solid #616161",
        fontSize: "12px",
        width: "100px",
        color: "#616161",
    }
  };
  export default styles;
  