import React, { useState } from "react";
import Image from 'next/image';
import '../components/AboutUs.css';
const ModalImage = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <Image 
          src="/img/logo_sito.png" 
          alt="Enlarged view"
          width={800}
          height={600}
          layout="responsive"
        />
      </div>
    </div>
  );
};

// Add display name
ModalImage.displayName = 'ModalImage';

const AboutMe = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="AboutUs" id="AboutMe" ref={ref}>
      <Image 
        src="/img/photo_presentazione.jpg" 
        alt="Gruppo di motociclisti della Gallino Off-Road School"
        width={400}
        height={300}
        className="img-thumbnail" 
        onClick={openModal}
      />
      <div className="text_AboutUs">
        <h4>Ritorna la Gallino Off-Road School di Giuseppe Gallino!</h4>
        <p>Dopo anni di collaborazioni con gruppi sportivi, in cui Giuseppe Gallino ha condiviso la sua esperienza per formare nuovi enduristi, nasce finalmente la <strong>Gallino Off-Road School</strong>.</p>
        <h4>Un&apos;Esperienza Trentennale al Tuo Servizio</h4>
        <p>L&apos;obiettivo di Giuseppe Gallino è mettere a disposizione la sua esperienza di oltre 30 anni nel fuoristrada, con numerosi titoli mondiali e italiani (consulta il suo curriculum), per chi desidera avvicinarsi o perfezionare la propria tecnica di guida off-road.</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Image
              src="/img/photo_presentazione.jpg"
              width={1200}
              height={900}
              className="modal-image"
              alt="Immagine ingrandita"
            />
          </div>
        </div>
      )}
    </div>
  );
});

// Add display name
AboutMe.displayName = 'AboutMe';

export default AboutMe;