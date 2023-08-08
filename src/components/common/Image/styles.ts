import { SxProps } from "@mui/material";

const styles: Record<string, SxProps> = {
  container: {
    width: "300px",
    height: "300px",
    margin: "100px",
    borderRadius: "150px",
    border:"2px solid #007ba7"
  },
  image:{
    zIndex:"-1"
  },
  avatar:{
    height:"150px",
    fontSize:"120px",
    margin:"25%"
  },
  edit:{
    marginTop:"-30px",
  },
  modal:{
    width:"fit-content",
    height:"auto",
    margin:"1% 15%",
  },
  modalContent:{
    backgroundColor:"white",
    padding:"20px"
  }
};

export default styles;
