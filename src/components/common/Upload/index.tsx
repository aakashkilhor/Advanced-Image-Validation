import { Box, InputBase, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles";

const Upload = ({
  fileSizeLowerLimitKB,
  fileSizeUpperLimitKB,
  minWidth,
  maxWidth,
  aspectRatio,
}: any) => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });

  const getDimension = async (file: any) => {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      reader.onload = () => {
        let image: any = new Image();
        image.src = reader.result;
        image.onload = function () {
          resolve({ width: this.width, height: this.height });
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const validateFileSize = (value: any) => {
    if (value !== undefined) {
      const file = value[0];
      const fileSizeKB = file.size / 1024;
      return (
        fileSizeKB >= fileSizeLowerLimitKB && fileSizeKB <= fileSizeUpperLimitKB
      );
    }
    return false;
  };

  const validateFileType = (value: any) => {
    if (value !== undefined) {
      const file = value[0];
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      return allowedTypes.includes(file.type);
    }
    return false;
  };

  const validateImageDimensions = async (value: any) => {
    if (value !== undefined) {
      const file = value[0];
      const sizes: any = await getDimension(file);

      const widthInRange = sizes.width >= minWidth && sizes.width <= maxWidth;
      const validAspectRatio =
        Math.abs(sizes.width / sizes.height - aspectRatio) <= 0.1;

      return widthInRange && validAspectRatio;
    }
    return false;
  };

  const combinedValidation = async (value: any) => {
    const isFileTypeValid = validateFileType(value);
    if (!isFileTypeValid) {
      return "Supported file types are jpg, jpeg, and png.";
    }
    const isFileSizeValid = validateFileSize(value);
    const isImageDimensionsValid = await validateImageDimensions(value);
    if (!isFileSizeValid) {
      return `File size must be within ${fileSizeLowerLimitKB}KB to ${fileSizeUpperLimitKB}KB.`;
    }
    if (!isImageDimensionsValid) {
      return `Image dimensions must be within ${minWidth} * ${maxWidth} pixels and ${aspectRatio} ± 0.1 Aspect Ratio.`;
    }
    return true;
  };

  const handleFileUpload = async (data: any) => {
    console.log(data);
  };

  return (
    <Box sx={styles.container}>
      <Controller
        name="file"
        control={control}
        rules={{
          required: "Image is required",
          validate: combinedValidation,
        }}
        render={({ field: { onChange, ref }, fieldState: { error } }) => (
          <Box>
            <InputBase
              type="file"
              inputRef={ref}
              onChange={(e: any) => {
                onChange(e.target.files);
              }}
            />
            {error && <p>{error.message}</p>}
          </Box>
        )}
      />

      <Button onClick={handleSubmit(handleFileUpload)} sx={styles.button}>Upload</Button>
    </Box>
  );
};

export default Upload;
