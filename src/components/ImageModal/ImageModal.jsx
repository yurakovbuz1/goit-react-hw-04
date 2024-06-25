import ReactModal from 'react-modal';

const ImageModal = ({ isOpen, closeModal, image }) => {
    

    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', transform: 'translate(-50%, -50%)' }
        }}
        >
        {image && (
          <div>
            <img src={image.urls.regular} alt={image.description} />
          </div>
        )}
      </ReactModal>
    )
}

export default ImageModal;