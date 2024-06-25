import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'


const ImageGallery = ({images}) => {
    return (<>
    <ul className={css.imageGallery}>
        {images.map((image) => 
            <li key={image.id}>
                {/* {console.log('image :>> ', image)} */}
                <ImageCard small={image.urls.small} description={image.description} />
            </li>
        )} 
    </ul>    
    </>)
}

export default ImageGallery
    