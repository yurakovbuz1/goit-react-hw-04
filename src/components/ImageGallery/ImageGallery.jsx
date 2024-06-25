import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({images}) => {
    return (<>
    <ul>
            {images.map((image) => {
            <li key={image.id}>
                <ImageCard />
            </li>
        })} 
    </ul>    
    </>)
}

export default ImageGallery