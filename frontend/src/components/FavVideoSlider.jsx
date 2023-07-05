import axios from "axios";

import { useEffect, useState } from "react";
import FavVideoSliderItem from "./FavVideoSliderItem.jsx";
import Searchbar from "./SearchBar.jsx";
import "../sass/Gallery.scss";

const FavoriteList = () => {

    // setup of states
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        axios
            .get(
                import.meta.env.VITE_BE_URL +
                `/api/yogavideos?favVideos=${true}`, { withCredentials: true }
            )
            .then((res) => {
                // Filtere die Videos basierend auf dem Suchbegriff und Level
                const filteredVideos = res.data.filter((video) => {
                    const videoCategory = video.category.toLowerCase();
                    const videoLevel = video.level.toLowerCase();
                    const videoDescription = video.description.toLowerCase();
                    const search = searchTerm.toLowerCase();
                    return videoCategory.includes(search) || videoLevel.includes(search) || videoDescription.includes(search)
                });
                setVideos(filteredVideos);
            })
            .catch((err) => console.error(err));
    };


    // api call can retrieve all videos or videos specified by asking for level and category 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?favVideos=true`, { withCredentials: true })
            .then((res) => setVideos(res.data))
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
                {videos.length > 0 && videos.map((item, i) => {
                    return (
                        <FavVideoSliderItem
                            key={i}
                            id={item._id}
                            category={item.category}
                            thumbnail={item.thumbnail}
                            level={item.level}
                        />
                    )
                })}
            </article>
            {videos.length === 0 && (
                <div>Sorry no videos found</div>
            )}
        </section>
    );
}
{/* <Searchbar onSearch={handleSearch} value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
placeholder="Schlagwörter eingeben" /> */}

export default FavoriteList;
