import sizes from "./sizes";

export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        height: "220px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid black",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        },
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "180px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
        paddingBottom: "15px",
        [sizes.down("md")]: {
            height: "30px",
            marginBottom: "4px"
        }
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    delete: {

    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0,
    }
};