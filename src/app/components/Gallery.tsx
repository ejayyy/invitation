import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [...Array(11)].map((_, index) => ({
  original: `/assets/gallery${String(index + 1).padStart(2, "0")}.jpg`,
  thumbnail: `/thumbnails/gallery${String(index + 1).padStart(2, "0")}.jpg`,
}));

const Gallery = () => {
  return (
    <section>
      <div className="flex items-center mb-8">
        <hr className="grow border-t" />
        <p className="title">📷 함께한 날의 기록</p>
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
