import axios from "axios";

import { useEffect, useState } from "react";
import FavMediationSliderItem from "./FavMeditationSliderItem.jsx";
import Searchbar from "./SearchBar.jsx";
import "../sass/Gallery.scss";

const FavoriteList = () => {

    // setup of states
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        axios
            .get(
                import.meta.env.VITE_BE_URL +
                `/api/meditationimages?favMeditations=${true}`, { withCredentials: true }
            )
            .then((res) => {
                // Filtere die Images basierend auf dem Suchbegriff und Level
                const filteredImages = res.data.filter((image) => {
                    const imageCategory = image.category.toLowerCase();
                    const imageLevel = image.level.toLowerCase();
                    const imageDescription = image.description.toLowerCase();
                    const search = searchTerm.toLowerCase();
                    return imageCategory.includes(search) || imageLevel.includes(search) || imageDescription.includes(search)
                });
                setImages(filteredImages);
            })
            .catch((err) => console.error(err));
    };


    // api call can retrieve all images or images specified by asking for level and category 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/meditationimages?favMeditations=true`, { withCredentials: true })
            .then((res) => setImages(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [])

    return (
        <section>
            <div>
                <Searchbar
                    onSearch={handleSearch}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        handleSearch(); // Filterung bei Eingabe auslösen
                    }}
                    placeholder="Schlagwörter eingeben"
                />

            </div>

            <article className='slider'>
                {images.length > 0 && images.map((item, i) => {
                    return (
                        <FavMediationSliderItem
                            key={i}
                            id={item._id}
                            category={item.category}
                            filename={item.filename}
                            level={item.level}
                        />
                    )
                })}
            </article>
            {images.length === 0 && (
                <div>Sorry no images found</div>
            )}
        </section>
    );
}
{/* <Searchbar onSearch={handleSearch} value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
placeholder="Schlagwörter eingeben" /> */}

export default FavoriteList;
