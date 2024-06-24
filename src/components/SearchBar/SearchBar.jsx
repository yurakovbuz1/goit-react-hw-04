import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const SearchBar = ({ onSubmit }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) {
            toast.error("Search term is empty")
        }
    }

    return (<>
        <header>
            <div><Toaster/></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    ref={inputRef}
                />
                <button type="submit">Search</button>
            </form>
        </header>

    </>);
}

export default SearchBar;