import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryImg } from "./styles";

export default function ImageGallery({ images, onClickImg }) {
  return (
    <>
      <GalleryImg>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.webformatURL}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onClickImg={onClickImg}
          />
        ))}
      </GalleryImg>
    </>
  );
}
