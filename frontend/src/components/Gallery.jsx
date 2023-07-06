import axios from "axios";
import '../sass/Gallery.scss'
import { useEffect, useState } from "react";
import anxiousIcon from '../assets/img/anxious_button.svg';
import allIcon from '../assets/img/all_button.svg';
import allIconActive from '../assets/img/all_button_active.svg'
import GalleryItem from './GalleryItem.jsx';
import Searchbar from './SearchBar.jsx';
import favIcon from '../assets/img/favorites_button.svg';
import strengthIcon from '../assets/img/strength_button.svg';
import beginnerIcon from '../assets/img/beginner_button.svg';
import expertIcon from '../assets/img/expert_button.svg';
import intermediateIcon from '../assets/img/intermediate_button.svg';
import flexibilityIcon from '../assets/img/flexibility_button.svg';
import '../sass/Gallery.scss';
import DailyCalm from "./DailyCalm.jsx";

const Gallery = () => {

    // setup of states

    const [videos, setVideos] = useState([]);
    const [level, setLevel] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [favVideos, setFavVideos] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");
    const [allButtonClicked, setAllButtonClicked] = useState(false);
    const sizes = ["thumbnailSmall", "thumbnailMedium", "thumbnailLarge"];




    const handleSearch = (searchTerm) => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?level=${level}&category=${category}&favVideos=${favVideos}&description=${description}`, { withCredentials: true })
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


    const handleButtonCategory = (input) => {

        if (input === "all") {
            setCategory(undefined);
            setLevel(undefined);
            setAllButtonClicked(true);
        } else {
            setCategory(input);
            setLevel(undefined);
            setAllButtonClicked(false);
        }
    };


    // api call can retrieve all videos or videos specified by asking for level and category 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?level=${level}&category=${category}&favVideos=${favVideos}&description=${description}`, { withCredentials: true })
            .then((res) => setVideos(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [level, category, favVideos])

    const handleLevel = (input) => {
        if (input === level) {
            setLevel(undefined)
        }
        else {
            setLevel(input)
        }
    }
    const handleCategory = (input) => {
        if (input === level) {
            setCategory(undefined)
        }
        else {
            setCategory(input)
        }
    }

    const handleFavVideos = (input) => {
        if (input === favVideos) {
            setFavVideos(undefined)
        }
        else {
            setFavVideos(input)
        }
    }

    return (
        <section>
            <article className="category_container">
                <div className="button_container">
                    <button className="category_button" onClick={() => { setFavVideos(undefined); setLevel(undefined); setCategory(undefined); handleButtonCategory("all") }}><img src={allButtonClicked ? allIconActive : allIcon} alt="" /></button>
                    <p>All</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleFavVideos('true') }}><img src={favIcon} alt="" />

                    </button>
                    <p>Favorites</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleCategory('stressrelief') }}><img src={anxiousIcon} alt="" /></button>
                    <p>Stress</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleCategory('flexibility') }}><img src={flexibilityIcon} alt="" /></button>
                    <p>Flexibility</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleCategory('strength') }}><img src={strengthIcon} alt="" /></button>
                    <p>Strength</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleLevel('beginner') }}><img src={beginnerIcon} alt="" /></button>
                    <p>Beginner</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleLevel('intermediate') }}><img src={intermediateIcon} alt="" /></button>
                    <p>Intermediate</p>
                </div>
                <div className="button_container">
                    <button className="category_button" onClick={() => { handleLevel('expert') }}><img src={expertIcon} alt="" /></button>
                    <p>Expert</p>
                </div>

            </article>
            <Searchbar
                onSearch={handleSearch}
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch(); // Filterung bei Eingabe auslösen
                }}
                placeholder="Schlagwörter eingeben"
            />
            <DailyCalm />

            <article className="gallery_container_grid">

                {

                    videos.length > 0 && videos.map((item, i) => {
                        return (
                            <GalleryItem
                                key={i}
                                id={item._id}
                                category={item.category}
                                thumbnail={item.thumbnail}
                                size={sizes[i % sizes.length]}
                            />
                        )
                    })
                }
                {
                    videos.length === 0 && (
                        <div>Sorry no videos found</div>
                    )
                }
            </article>
        </section >
    );
}

export default Gallery;





