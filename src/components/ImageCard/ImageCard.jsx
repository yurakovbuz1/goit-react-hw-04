import css from './ImageCard.module.css'

const ImageCard = ({ small, description, openModal }) => {
    return (
    <>
        <div>
                <img src={small} alt={description} className={css.image} onClick={openModal} />
        </div>
        </>
    )
}

export default ImageCard;