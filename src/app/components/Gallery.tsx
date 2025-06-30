import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  { original: "/assets/gallery01.jpg", thumbnail: "/thumbnails/gallery01.jpg" },
  { original: "/assets/gallery02.jpg", thumbnail: "/thumbnails/gallery02.jpg" },
  { original: "/assets/gallery03.jpg", thumbnail: "/thumbnails/gallery03.jpg" },
  { original: "/assets/gallery04.jpg", thumbnail: "/thumbnails/gallery04.jpg" },
  { original: "/assets/gallery05.jpg", thumbnail: "/thumbnails/gallery05.jpg" },
];

const Gallery = () => {
  return (
    <section>
      <div className="flex items-center mb-8" data-aos="fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">📷 함께한 날의 기록</p>
        <hr className="grow border-t" />
      </div>
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <ImageGallery
          items={images}
          showNav={false}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </section>
  );
};

export default Gallery; 