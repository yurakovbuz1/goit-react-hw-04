import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const ACCESS_KEY = 'hffMbJ-gOd_syN1szFIgkdmE2UIDBfwUtcE-8dIYTUY';
const baseURL = 'https://api.unsplash.com/';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let lastPage = false;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await axios.get(baseURL, {
          client_id: ACCESS_KEY,
          query,
          page,
          per_page: 12,
        });
        setImages(data.results)
        lastPage = page === data.total_pages;
      }
      catch (e) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData()

  }, [page, query])

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
  }

  const handlePage = () => {
    setPage(page + 1);
  }
  
  
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? <ErrorMessage/> : <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handlePage} />}
    </>
  )
}

export default App
