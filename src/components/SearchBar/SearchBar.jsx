import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from './SearchBar.module.css'


const SearchBar = ({ onSubmit }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) {
            toast.error("Search term is empty");
        } else {
            onSubmit(inputRef.current.value);
        }
    }

    return (<>
        <header>
            <div><Toaster position="top-left"/></div>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    ref={inputRef}
                    className={css.searchField}
                />
                <button type="submit" className={css.searchButton}>Search</button>
            </form>
        </header>

    </>);
}

export default SearchBar;