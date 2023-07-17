import axios from "axios";
import { IImageProps, IResponseDataProps } from "interfaces";

const BASE_URL = "https://pixabay.com/api";
const API_key = "29959892-dbc4da226a3c63fb0b6c6ac05";
const image_type = "image_type=photo";
const orientation = "orientation=horizontal";
const safesearch = "safesearch=true";
const perPage = 12;

export const fetchImages = async (
  name: string,
  page: number
): Promise<IResponseDataProps> => {
  const url = `${BASE_URL}/?key=${API_key}&q=${name}&${image_type}&${orientation}&${safesearch}&page=${page}&per_page=${perPage}`;

  const respObj = await axios.get(url);
  const respImg: [IImageProps] = await respObj.data.hits;

  const totalImg: number = await respObj.data.total;
  const renderImg = respImg.map(
    ({ id, largeImageURL, tags, comments, likes, downloads, views }) => {
      return {
        id,
        largeImageURL,
        tags,
        comments,
        likes,
        downloads,
        views,
      };
    }
  );

  return { renderImg, totalImg };
};
