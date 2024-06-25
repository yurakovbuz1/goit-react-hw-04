import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const ACCESS_KEY = 'hffMbJ-gOd_syN1szFIgkdmE2UIDBfwUtcE-8dIYTUY';
axios.defaults.baseURL = 'https://api.unsplash.com/';

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  

  return (
    <>
      <SearchBar  />
      {/* {isError ? <ErrorMessage/> : <ImageGallery images={res.results} />} */}
      {isLoading && <Loader />}
      {images.length>0 && <LoadMoreBtn />}
    </>
  )
}

export default App
