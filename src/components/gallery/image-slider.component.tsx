import React, { useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Image } from "../../models/image";
import style from "./image.module.css";

interface MyGalleryProps {
  images: Image[];
}

const MyGallery: React.FC<MyGalleryProps> = ({ images }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const galleryImages: ReactImageGalleryItem[] = images.map((image) => ({
    original: image.url,
    thumbnail: image.url,
    originalClass: fullscreen ? style.customOriginal2 : style.customOriginal,
    thumbnailClass: style.ecustomThumbnail,
    thumbnailHeight: 80,
    originalHeight: 500,
  }));

  return (
    <ImageGallery
      items={galleryImages}
      additionalClass={style.myGallery}
      onScreenChange={
        fullscreen ? () => setFullscreen(true) : () => setFullscreen(false)
      }
    />
  );
};

export default MyGallery;
