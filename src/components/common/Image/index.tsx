import { Card, CardMedia, Box } from "@mui/material";
import styles from "./styles";

const Image = ({toggleModal}:any) => {
  let image = true
  let text = "purple"
  let back = "#E0ffff"
  return (
    <Card sx={styles.container} style={{backgroundColor:back}}>
      {image?(<CardMedia sx={styles.image} component="img" src="assets/avatar.jpg" />):(
        <Box sx={styles.avatar} style = {{color:text}}>AK</Box>
      )}
      <CardMedia sx={styles.edit} component="img" src="assets/icon.jpg" onClick={toggleModal}/>
    </Card>
  );
};

export default Image;
