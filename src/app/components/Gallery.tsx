import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  { original: "/assets/Gallery_Photo_1.webp", thumbnail: "/assets/Gallery_Photo_1.webp" },
  { original: "/assets/Gallery_Photo_2.webp", thumbnail: "/assets/Gallery_Photo_2.webp" },
  { original: "/assets/Gallery_Photo_3.webp", thumbnail: "/assets/Gallery_Photo_3.webp" },
  { original: "/assets/Gallery_Photo_4.webp", thumbnail: "/assets/Gallery_Photo_4.webp" },
  { original: "/assets/Gallery_Photo_5.webp", thumbnail: "/assets/Gallery_Photo_5.webp" },
  { original: "/assets/Gallery_Photo_6.webp", thumbnail: "/assets/Gallery_Photo_6.webp" },
];

const Gallery = () => {
  return (
    <section>
      <div className="flex items-center mb-8">
        <hr className="grow border-t" />
        <p className="text-base font-bold opacity-85 mx-4 text-center">
          우리의 아름다운 순간
        </p>
        <hr className="grow border-t" />
      </div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </section>
  );
};

export default Gallery; 