import css from './ImageCard.module.css'

const ImageCard = ({ small, description }) => {
    return (
    <>
        <div>
                <img src={small} alt={description} className={css.image} />
        </div>
        </>
    )
}

export default ImageCard;