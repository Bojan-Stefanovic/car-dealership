import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Tour() {
  const gallery = {
    images: [
      {
        id: 1,
        url: "../../public/Gallery/image1.gif",
        title: "Image One Title",
        description: "Description of Image One.",
      },
      {
        id: 2,
        url: "../../public/Gallery/image2.gif",
        title: "Image Two Title",
        description: "Description of Image Two.",
      },
      {
        id: 3,
        url: "../../public/Gallery/image3.gif",
        title: "Image Three Title",
        description: "Description of Image Three.",
      },
      {
        id: 4,
        url: "../../public/Gallery/image4.gif",
        title: "Image Four Title",
        description: "Description of Image Four.",
      },
      {
        id: 5,
        url: "../../public/Gallery/image5.gif",
        title: "Image Five Title",
        description: "Description of Image Five.",
      },
      {
        id: 6,
        url: "../../public/Gallery/image6.gif",
        title: "Image Six Title",
        description: "Description of Image Six.",
      },
      {
        id: 7,
        url: "../../public/Gallery/image7.gif",
        title: "Image Seven Title",
        description: "Description of Image Seven.",
      },
      {
        id: 8,
        url: "../../public/Gallery/image8.gif",
        title: "Image Eight Title",
        description: "Description of Image Eight.",
      },
      {
        id: 9,
        url: "../../public/Gallery/image9.gif",
        title: "Image Nine Title",
        description: "Description of Image Nine.",
      },
      {
        id: 10,
        url: "../../public/Gallery/image10.gif",
        title: "Image Ten Title",
        description: "Description of Image Ten.",
      },
    ],
  };
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
          // additionalClass="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Tour;
