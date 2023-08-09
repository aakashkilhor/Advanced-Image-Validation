import UploadIcon from "@mui/icons-material/Upload";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import Upload from "../Upload";
import styles from "./styles";

const Image = () => {
  // Toggle the modal
  const [open, setOpen] = useState(false);
  
  const [imageUrl,setProfileImage] = useState<any>()

  let text = "purple";
  let backGround = "#E0ffff";

  const removeImage = () => {
    setProfileImage("");
  };

  let src = imageUrl??"assets/avatar.jpg"

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={styles.container} style={{ backgroundColor: backGround }}>
        {imageUrl ? (
          <Box
            sx={styles.image}
            component="img"
            src={src}
            height="300px"
          />
        ) : (
          <Box sx={styles.initials} style={{ color: text }}>
            AK
          </Box>
        )}

        <Box sx={styles.uploadIcon} onClick={handleOpen}>
          <UploadIcon />
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Box>
          <Box sx={styles.modalContent}>
            Please Upload Your Image
            <Upload
              fileSizeLowerLimitKB={1}
              fileSizeUpperLimitKB={1000}
              minWidth={100}
              maxWidth={1050}
              aspectRatio={1}
              removeImage={removeImage}
              setImageUrl = {setProfileImage}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Image;
