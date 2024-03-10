/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactDOM from "react-dom";

const GalleryItem = ({ image, onClick }) => {
  return (
    <div
      className="cursor-pointer h-[10rem]  overflow-hidden"
      onClick={() => onClick(image.id)}>
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-auto transform transition duration-300 ease-in-out hover:scale-105"
      />
      <div className="mt-2">
        {/* <h4 className="text-lg font-semibold">{image.title}</h4>
        <p className="text-sm">{image.description}</p> */}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, images, onClose, currentImageId }) => {
  if (!isOpen) return null;

  const currentIndex = images.findIndex((image) => image.id === currentImageId);
  const currentImage = images[currentIndex];

  const navigate = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      onClose(images[newIndex].id);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
        <button
          onClick={() => onClose(null)}
          className="mb-4 self-end px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-700">
          Close
        </button>
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="w-full max-w-3xl max-h-[80vh] object-contain mb-4"
        />
        <div>
          <button
            onClick={() => navigate(-1)}
            disabled={currentIndex === 0}
            className="mr-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50">
            Prev
          </button>
          <button
            onClick={() => navigate(1)}
            disabled={currentIndex === images.length - 1}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Gallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(null);

  const handleImageClick = (id) => {
    setCurrentImageId(id);
    setModalOpen(true);
  };

  const handleCloseModal = (id = null) => {
    setCurrentImageId(id);
    setModalOpen(false);
  };

  return (
    <section className="gallery-section">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image) => (
          <GalleryItem
            key={image.id}
            image={image}
            onClick={handleImageClick}
          />
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        images={images}
        onClose={handleCloseModal}
        currentImageId={currentImageId}
      />
    </section>
  );
};

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

  return (
    <>
      <div className="container ">
        <h2 className="text-3xl md:text-4xl font-bold text-center my-16">
          Gallery
        </h2>
        <Gallery images={gallery.images} />
      </div>
    </>
  );
}

export default Tour;
