import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const ACCESS_KEY = 'hffMbJ-gOd_syN1szFIgkdmE2UIDBfwUtcE-8dIYTUY';
const baseURL = 'https://api.unsplash.com/search/photos/';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isFinalPage, setFinalPage] = useState(true);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const { data } = await axios.get(baseURL, {
          params: {
            client_id: ACCESS_KEY,
            query,
            page,
            per_page: 12,
          }
        });
        setImages((prev) => [...prev, ...data.results]);
        console.log('data.total_pages :>> ', data.total_pages);
        console.log('page :>> ', page);
        setFinalPage(data.total_pages - page <= 0);
      }
      catch (e) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    query && fetchData()

  }, [page, query])

  const handleSubmit = (searchQuery) => {
    if (searchQuery !== query) {
      setImages([]);
      setPage(1);
      setQuery(searchQuery);
    }
  }

  const handlePage = () => {
    setPage(page + 1);
  }
  
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
  
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? <ErrorMessage /> : <ImageGallery images={images} openModal={ openModal} />}
      {isModalOpen && <ImageModal isOpen={isModalOpen} closeModal={closeModal} image={selectedImage} />}
      {isLoading && <Loader />}
      {!isFinalPage && <LoadMoreBtn onClick={handlePage} />}
    </>
  )
}

export default App
