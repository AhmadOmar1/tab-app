import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Image } from "../../models/image";
import style from "./image.module.css";

interface MyGalleryProps {
    images: Image[];
}

const MyGallery: React.FC<MyGalleryProps> = ({ images }) => {
    const galleryImages: ReactImageGalleryItem[] = images.map((image) => ({
        original: image.url,
        thumbnail: image.url,
        originalClass: style.customOriginal,
        thumbnailClass: style.ecustomThumbnail,
        thumbnailWidth: 100,
        thumbnailHeight: 80,
    }));

    return (
        <ImageGallery
            items={galleryImages}
            additionalClass={style.myGallery} 
        />
    );
};

export default MyGallery;
