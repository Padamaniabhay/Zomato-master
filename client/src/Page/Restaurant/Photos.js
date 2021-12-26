import React,{useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';


//components
import PhotosCollection from "../../Components/restaurant/PhotosCollection"
const Photos = () => {
    const [photos,setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/3c6/3bd86ee3117787d28ef60efcf460d3c6_1629890787.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/86f74ace4aa60cc3e720c69fad84316b.jpg"]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
          {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}
            <div className='flex flex-wrap gap-2'>
            {
                photos.map((photo)=><PhotosCollection image={photo} openViewer={openViewer}/>)
            }
            </div>

        </>
    )
}

export default Photos
