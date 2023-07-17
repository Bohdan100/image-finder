export interface IImageProps {
  id: number;
  largeImageURL: string;
  tags: string;
  comments: string;
  likes: string;
  downloads: string;
  views: string;
}

export interface IImageFinderProps {
  toggleTheme: () => void;
}

export interface ISearchBarProps {
  handleSearchSubmit: (newSearchName: string) => void;
  toggleTheme: () => void;
}

export interface IResponseDataProps {
  totalImg: number;
  renderImg: IImageProps[];
}

export interface IResponseProps {
  renderImg: IImageProps[];
  totalImg: number;
}

export interface IImageGalleryProps {
  images: IImageProps[];
}

export interface IImageGalleryItemProps {
  src: string;
  tags: string;
  comments: string;
  likes: string;
  downloads: string;
  views: string;
}

export interface IModalProps extends IImageGalleryItemProps {
  onClose: () => void;
}

export interface IChildModalProps {
  comments: string;
  likes: string;
  downloads: string;
  views: string;
}
