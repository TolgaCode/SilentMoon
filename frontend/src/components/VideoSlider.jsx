import '../sass/Slider.scss'
import Searchbar from "../components/SearchBar.jsx";
import VideoSliderItem from './VideoSliderItem.jsx';
import axios from 'axios'
import { useEffect, useState } from 'react';

const VideoSlider = () => {
    const [videos, setVideos] = useState([]);
    const [level, setLevel] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [favVideos, setFavVideos] = useState(undefined);
    const [description, setDescription] = useState(undefined);

    const [searchTerm, setSearchTerm] = useState("");



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


    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?`, { withCredentials: true })
            .then((res) => { setVideos(res.data); })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <section className='videoSlider'>
                <div className="searchbar_container">
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
                <article className="sliderContainer">
                    <div className="recommended-hdl">
                        <h2 className="hdl-medium-green">Recommended Yoga for you</h2>
                    </div>
                    <div className='slider'>
                        {videos.length > 0 && videos.map((item, i) => {
                            return (
                                <VideoSliderItem
                                    key={i}
                                    id={item._id}
                                    category={item.category}
                                    thumbnail={item.thumbnail}
                                    level={item.level}
                                    title={item.title}
                                />
                            )
                        })}

                    </div>
                    {videos.length === 0 && (
                        <div>Sorry no videos found</div>
                    )}
                </article>
            </section>
        </>
    );
}

export default VideoSlider;