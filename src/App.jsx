import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';

const ACCESS_KEY = 'hffMbJ-gOd_syN1szFIgkdmE2UIDBfwUtcE-8dIYTUY';
axios.defaults.baseURL = 'https://api.unsplash.com/';

function App() {

  return (
    <>
      <SearchBar/>
    </>
  )
}

export default App
