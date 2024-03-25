import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useAppContext } from "../context/AppContext";
function Tour() {
  const { gallery } = useAppContext();
  const galleryItems = gallery.images.map((image) => ({
    original: image.url,
    thumbnail: image.url,
    fullscreen: image.url,
  }));
  return (
    <section className="flex flex-col items-center justify-center  container ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16 font-bold text-center">
        Virtual Tour
      </h2>
      <div
        className="relative bg-white p-10 rounded-2xl shadow-noOffset mb-10 mx-auto"
        style={{ maxWidth: "1024px", width: "100%" }}>
        <div className="absolute inset-0 border-4 border-white rounded-lg"></div>
        <ImageGallery
          items={galleryItems}
          showPlayButton={false}
          autoPlay={true}
          lazyLoad={true}
          showFullscreenButton={true}
          slideDuration={1000}
          slideInterval={10000}
          showThumbnails={true}
          showBullets={true}
          showIndex={false}
        />
      </div>
    </section>
  );
}

export default Tour;
