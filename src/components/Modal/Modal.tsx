import { FC, useEffect, useState, SyntheticEvent } from "react";
import { createPortal } from "react-dom";
import { IModalProps } from "interfaces";

import { ChildModal } from "./ChildModal";

import { Overlay, ModalWindow } from "./Modal.styled";
import { Box, Button, Typography } from "@mui/material";

const modalRoot = document.querySelector("#modal-root");

export const Modal: FC<IModalProps> = ({
  src,
  tags,
  onClose,
  comments,
  likes,
  downloads,
  views,
}) => {
  const [attr, setAttr] = useState({ src: "", tags: "" });

  useEffect(() => {
    setAttr({ src, tags });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
        setAttr({ src: "", tags: "" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, src, tags]);

  const handleBackdropClick = (e: SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
      setAttr({ src: "", tags: "" });
    }
  };

  return modalRoot
    ? createPortal(
        <Overlay onClick={handleBackdropClick}>
          <ModalWindow
            sx={{
              width: { xs: "90vw", sm: "70vw", md: "60vw" },
              height: { xs: "90vw", sm: "70vw", md: "60vh" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                type="submit"
                onClick={onClose}
                sx={{
                  fontSize: { xs: 12, sm: 18, md: 20 },
                }}
              >
                Close
              </Button>
              <Typography
                variant="body1"
                sx={{ color: "#1976d2", fontSize: { xs: 14, sm: 18, md: 20 } }}
              >
                {attr.tags}
              </Typography>
              <ChildModal
                comments={comments}
                likes={likes}
                downloads={downloads}
                views={views}
              />
            </Box>
            <img src={attr.src} alt="modal window" />
          </ModalWindow>
        </Overlay>,
        modalRoot
      )
    : null;
};
