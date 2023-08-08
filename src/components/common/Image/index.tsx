import { Box, Card, CardMedia, Modal } from "@mui/material";
import { useState } from "react";
import styles from "./styles";
import Upload from "../Upload";

const Image = () => {
  const [open, setOpen] = useState(false);

  let image = true;
  let text = "purple";
  let back = "#E0ffff";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={styles.container} style={{ backgroundColor: back }}>
      {image ? (
        <CardMedia sx={styles.image} component="img" src="assets/avatar.jpg" />
      ) : (
        <Box sx={styles.avatar} style={{ color: text }}>
          AK
        </Box>
      )}
      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Box>
          <Box sx={styles.modalContent}>Please Upload Your Image
          <Upload
            fileSizeLowerLimitKB={1}
            fileSizeUpperLimitKB={1000}
            minWidth={100}
            maxWidth={1000}
            aspectRatio={1}
          />
          </Box>
        </Box>
      </Modal>
      <CardMedia
        sx={styles.edit}
        component="img"
        src="assets/icon.jpg"
        onClick={handleOpen}
      />
    </Card>
  );
};

export default Image;
