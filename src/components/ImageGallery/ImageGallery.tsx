import { FC } from "react";
import { IImageGalleryProps } from "interfaces";

import { Masonry } from "@mui/lab";
import { ImageGalleryItem } from "../ImageGalleryItem";

export const ImageGallery: FC<IImageGalleryProps> = ({ images }) => {
  return (
    <Masonry
      columns={{ xs: 1, sm: 3, md: 3, lg: 3 }}
      spacing={{ xs: 1, sm: 2 }}
      defaultHeight={450}
      defaultColumns={3}
      defaultSpacing={1}
      sx={{
        width: "100 vh",
        height: "100vh",
        mt: { xs: "60px" },
        pl: { xs: "2px" },
        pr: { xs: "2px" },
        overflow: "hidden",
      }}
    >
      {images.map(
        ({ id, largeImageURL, tags, comments, likes, downloads, views }) => (
          <ImageGalleryItem
            key={id}
            src={largeImageURL}
            tags={tags}
            comments={comments}
            likes={likes}
            downloads={downloads}
            views={views}
          />
        )
      )}
    </Masonry>
  );
};
