import React from "react";
import { GalleryItem, Img } from "./styles";

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  onClickImg,
}) {
  return (
    <>
      <GalleryItem>
        <Img
          src={webformatURL}
          data-large={largeImageURL}
          onClick={onClickImg}
        />
      </GalleryItem>
    </>
  );
}
