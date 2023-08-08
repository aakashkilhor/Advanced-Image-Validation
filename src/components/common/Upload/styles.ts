import { SxProps } from "@mui/material";

const styles: Record<string, SxProps> = {
  container: {
    backgroundColor: "white",
    width: "fit-content",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  },
  button:{
    backgroundColor: '#191970',
    color: 'white',
    margin:"0px 20px",
    padding: '5px 10px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'darkblue',
    },
  }
};

export default styles;
