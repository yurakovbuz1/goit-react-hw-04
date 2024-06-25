import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({images}) => {
    return (<>
    <ul>
            {images.map((image) => {
            <li key={image.id}>
                <ImageCard small={image.urls.small} description={image.description} />
            </li>
        })} 
    </ul>    
    </>)
}

export default ImageGallery
    