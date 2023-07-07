import { useState } from "react";
import '../sass/SearchBar.scss'

const Searchbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className="searchInput"
            />
        </div>
    );
};

export default Searchbar;

