import { FC, useState, useEffect } from "react";
import { IImageFinderProps, IImageProps, IResponseProps } from "interfaces";

import { fetchImages } from "services";
import { SearchBar } from "../Searchbar";
import { ImageGallery } from "../ImageGallery";
import { Loader } from "components/Loader";

import {
  Box,
  Typography,
  Snackbar,
  Alert,
  AlertTitle,
  Button,
} from "@mui/material";

export const ImageFinder: FC<IImageFinderProps> = ({ toggleTheme }) => {
  const [images, setImages] = useState<IImageProps[] | []>([]);
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const [alert, setAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  useEffect(() => {
    if (!name) {
      return;
    }
    setIsLoading(true);

    async function getRequestImages() {
      try {
        const response: IResponseProps = await fetchImages(name, page);
        const { renderImg, totalImg } = response;

        if (renderImg.length === 0) {
          setMessage("No images found for your search query!");
          setAlert(true);
        }
        setImages((prevImages: IImageProps[] | []): [] | IImageProps[] => [
          ...prevImages,
          ...renderImg,
        ]);

        setTotal(totalImg);
        setIsLoading(false);
        setMessage(
          `Total found - ${totalImg} images. You can open ${renderImg.length} photos each time.`
        );
        setAlert(true);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setMessage(`Error: ${error.message}`);
          setAlert(true);
        }
      }
    }

    getRequestImages();
  }, [page, name]);

  const handleSearchSubmit = (newName: string) => {
    if (newName === name) {
      setMessage("You entered the previous search word!");
      setAlert(true);
      return;
    }

    setImages([]);
    setPage(1);
    setName(newName);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        toggleTheme={toggleTheme}
      />
      <Snackbar
        sx={{ width: "300px", height: "30px" }}
        open={alert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={handleAlertClose}
      >
        <Alert
          variant="filled"
          severity="info"
          onClose={handleAlertClose}
          sx={{ mt: "20px" }}
        >
          <AlertTitle>Notification</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
      {images.length > 0 && (
        <Box>
          <ImageGallery images={images} />
          {total - page * 12 > 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "30px",
                mt: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={loadMore}
                sx={{
                  width: "250px",
                  height: "60px",
                  borderRadius: "10px",
                }}
              >
                Load more
              </Button>
            </Box>
          )}
        </Box>
      )}

      {images.length === 0 && (
        <Typography variant="h4" sx={{ mt: 20, textAlign: "center" }}>
          Search images and photos...
        </Typography>
      )}
      {isLoading && <Loader />}
    </>
  );
};
