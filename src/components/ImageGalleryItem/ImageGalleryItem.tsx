import { FC, useState } from "react";
import { IImageGalleryItemProps } from "interfaces";

import { Paper, ImageListItemBar } from "@mui/material";
import { Modal } from "../Modal";

export const ImageGalleryItem: FC<IImageGalleryItemProps> = ({
  src,
  tags,
  comments,
  likes,
  downloads,
  views,
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevSetModal) => !prevSetModal);
  };

  return (
    <Paper>
      <img src={src} alt={tags} loading="lazy" onClick={toggleModal} />
      <ImageListItemBar position="below" title={tags} sx={{ pl: "10px" }} />
      {modal && (
        <Modal
          src={src}
          tags={tags}
          onClose={toggleModal}
          comments={comments}
          likes={likes}
          downloads={downloads}
          views={views}
        />
      )}
    </Paper>
  );
};
