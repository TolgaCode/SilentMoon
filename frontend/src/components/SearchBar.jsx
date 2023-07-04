import { useState } from "react";
import '../sass/SearchBar.scss'
const Searchbar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        console.log("klick")
        onSearch(searchTerm);
        setSearchTerm("");
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Schlagwörter eingeben"
                className="searchInput" />
            <button onClick={handleSearch}>Suchen</button>
        </div>
    );
}

export default Searchbar;