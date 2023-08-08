import { SxProps } from "@mui/material";

const styles: Record<string, SxProps> = {
  container: {
    position: "absolute",
    width: "300px",
    height: "300px",
    margin: "50px",
    borderRadius: "150px",
    border: "2px solid #007ba7",
    overflow: "hidden",
  },

  initials: {
    position: "relative",
    height: "155px",
    fontSize: "120px",
    margin: "20% 25% 30% 25%",
  },

  image: {
    borderRadius: "150px",
    zIndex: "1",
  },
  uploadIcon: {
    position: "absolute",
    backgroundColor: "#CCCCCC",
    opacity: "0.7",
    padding: "10px 140px",
    color: "black",
    marginTop: "-40px",
    cursor: "pointer",
    zIndex: "2",
  },

  // Modal Styling
  modal: {
    width: "fit-content",
    height: "auto",
    margin: "5% 30%",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
  },
};

export default styles;
