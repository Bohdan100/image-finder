import { FC, useState } from "react";
import { IChildModalProps } from "interfaces";

import { Box, Modal, Typography, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ChildModal: FC<IChildModalProps> = ({
  comments,
  likes,
  downloads,
  views,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ fontSize: { xs: 12, sm: 18, md: 20 } }}
      >
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Typography variant="h6" sx={{ color: "#1976d2", mb: 2 }}>
            Details information:
          </Typography>
          <Typography variant="body2" sx={{ color: "#90caf9" }}>
            Comments: {comments}
          </Typography>
          <Typography variant="body2" sx={{ color: "#90caf9" }}>
            Likes: {likes}
          </Typography>
          <Typography variant="body2" sx={{ color: "#90caf9" }}>
            Downloads: {downloads}
          </Typography>
          <Typography variant="body2" sx={{ color: "#90caf9", mb: 2 }}>
            Views: {views}
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};
