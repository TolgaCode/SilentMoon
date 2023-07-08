import axios from "axios";
import '../sass/Gallery.scss'
import { useEffect, useState } from "react";
import anxiousIcon from '../assets/img/anxious_button.svg';
import anxiousIconActive from '../assets/img/anxious_active_button.svg';
import allIcon from '../assets/img/all_button.svg';
import allIconActive from '../assets/img/all_button_active.svg'
import GalleryItem from './GalleryItem.jsx';
import Searchbar from './SearchBar.jsx';
import favIconActive from '../assets/img/favorites_active_button.svg';
import favIcon from '../assets/img/favorites_button.svg';
import strengthIcon from '../assets/img/strength_button.svg';
import strengthIconActive from '../assets/img/strength_active_button.svg';
import beginnerIcon from '../assets/img/beginner_button.svg';
import beginnerIconActive from '../assets/img/beginner_button_active.svg';
import expertIcon from '../assets/img/expert_button.svg';
import expertIconActive from '../assets/img/expert_button_active.svg';
import intermediateIcon from '../assets/img/intermediate_button.svg';
import intermediateIconActive from '../assets/img/intermediate_button_active.svg'
import flexibilityIcon from '../assets/img/flexibility_button.svg';
import flexibilityIconActive from '../assets/img/flexibility_active_button.svg'
import '../sass/Gallery.scss';
import DailyCalm from "./DailyCalm.jsx";
import '../App.scss';

const Gallery = () => {

    // setup of states

    const [videos, setVideos] = useState([]);
    const [level, setLevel] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [favVideos, setFavVideos] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");
    const [allButtonClicked, setAllButtonClicked] = useState(false);
    const [flexibilityButtonClicked, setFlexibilityButtonClicked] = useState(false);
    const [stressreliefButtonClicked, setstressreliefButtonClicked] = useState(false);
    const [strengthButtonClicked, setStrengthButtonClicked] = useState(false);
    const [beginnerButtonClicked, setBeginnerButtonClicked] = useState(false);
    const [intermediateButtonClicked, setIntermediateButtonClicked] = useState(false);
    const [expertButtonClicked, setExpertButtonClicked] = useState(false);
    const [favButtonClicked, setFavButtonClicked] = useState(false);
    const sizes = ["thumbnailSmall", "thumbnailMedium", "thumbnailLarge"];

    // const flexibilityButtonIcon = flexibilityButtonClicked ? flexibilityIconActive : flexibilityIcon;


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
        if (input === 'all') {
            setCategory(undefined);
            setLevel(undefined);
            setAllButtonClicked(true);
            setstressreliefButtonClicked(false);
            setStrengthButtonClicked(false);
            setFlexibilityButtonClicked(false);
            setFavButtonClicked(false);

        } else if (input === 'flexibility') {
            setCategory(input);
            setLevel(undefined);
            setAllButtonClicked(false);
            setstressreliefButtonClicked(false);
            setStrengthButtonClicked(false);
            setFlexibilityButtonClicked(true);
            setFavButtonClicked(false);


        } else if (input === 'stressrelief') {
            setCategory(input);
            setLevel(undefined);
            setAllButtonClicked(false);
            setFlexibilityButtonClicked(false);
            setStrengthButtonClicked(false);
            setstressreliefButtonClicked(true);
            setFavButtonClicked(false);
        } else if (input === 'strength') {
            setCategory(input);
            setLevel(undefined);
            setFlexibilityButtonClicked(false);
            setstressreliefButtonClicked(false);
            setStrengthButtonClicked(true);
            setFavButtonClicked(false);

        } else if (input === 'beginner') {
            if (level === 'beginner') {
                setLevel(undefined);
            } else {
                setLevel('beginner');
            }
            // setAllButtonClicked(false);
            setBeginnerButtonClicked((prevClicked) => !prevClicked);
            setIntermediateButtonClicked(false);
            setExpertButtonClicked(false);

        } else if (input === 'intermediate') {
            if (level === 'intermediate') {
                setLevel(undefined);
            } else {
                setLevel('intermediate');
            }
            // setAllButtonClicked(false);
            setBeginnerButtonClicked(false);
            setIntermediateButtonClicked((prevClicked) => !prevClicked);
            setExpertButtonClicked(false);

        } else if (input === 'expert') {
            if (level === 'expert') {
                setLevel(undefined);
            } else {
                setLevel('expert');
            }
            // setAllButtonClicked(false);
            setBeginnerButtonClicked(false);
            setIntermediateButtonClicked(false);
            setExpertButtonClicked((prevClicked) => !prevClicked);

        }

        else if (input === 'favVideos') {
            setCategory(undefined);
            setLevel(undefined);
            setAllButtonClicked(false);
            setFlexibilityButtonClicked(false);
            setstressreliefButtonClicked(false);
            setStrengthButtonClicked(false);
            setFavButtonClicked((prevClicked) => !prevClicked);

        }
        else {
            setCategory(input);
            setLevel(undefined);
            setAllButtonClicked(false);
            setFlexibilityButtonClicked(false);
            setstressreliefButtonClicked(false);
            setStrengthButtonClicked(false);
            setBeginnerButtonClicked(false);
            setIntermediateButtonClicked(false);
            setExpertButtonClicked(false);
            setFavButtonClicked(false);
        }
    };



    // api call can retrieve all videos or videos specified by asking for level and category 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?level=${level}&category=${category}&favVideos=${favVideos}&description=${description}`, { withCredentials: true })
            .then((res) => setVideos(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [level, category, favVideos])

    const handleCategory = (input) => {
        if (input === category) {
            setCategory(undefined)
        }
        else {
            setCategory(input)
        }
    }

    const handleLevel = (input) => {
        if (input === level) {
            setLevel(undefined);
        } else {
            setLevel(input);
        }
    };


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
                    <p className="button_headline">All</p>
                </div>
                <div className="button_container">
                    {/* <button className="category_button" onClick={() => { handleFavVideos('true') }}><img src={favIcon} alt="" />
                    </button> */}
                    <button className={`category_button ${favButtonClicked ? 'active' : ''}`} onClick={() => { handleButtonCategory('favVideos'); handleFavVideos('true') }}>
                        <img src={favButtonClicked ? favIconActive : favIcon} alt="" />
                    </button>
                    <p className="button_headline">Favorites</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${stressreliefButtonClicked ? 'active' : ''}`} onClick={() => { handleCategory('stressrelief'); handleButtonCategory('stressrelief') }}>
                        <img src={stressreliefButtonClicked ? anxiousIconActive : anxiousIcon} alt="" />
                    </button>
                    <p className="button_headline">Stress</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${flexibilityButtonClicked ? 'active' : ''}`} onClick={() => { handleCategory('flexibility'); handleButtonCategory('flexibility') }}>
                        <img src={flexibilityButtonClicked ? flexibilityIconActive : flexibilityIcon} alt="" />
                    </button>
                    <p className="button_headline">Flexibility</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${strengthButtonClicked ? 'active' : ''}`} onClick={() => { handleCategory('strength'); handleButtonCategory('strength') }}>
                        <img src={strengthButtonClicked ? strengthIconActive : strengthIcon} alt="" />
                    </button>
                    <p className="button_headline">Strength</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${beginnerButtonClicked ? 'active' : ''}`} onClick={() => { handleLevel('beginner'); handleButtonCategory('beginner') }}>
                        <img src={beginnerButtonClicked ? beginnerIconActive : beginnerIcon} alt="" />
                    </button>
                    <p className="button_headline">Beginner</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${intermediateButtonClicked ? 'active' : ''}`} onClick={() => { handleLevel('intermediate'); handleButtonCategory('intermediate') }}>
                        <img src={intermediateButtonClicked ? intermediateIconActive : intermediateIcon} alt="" />
                    </button>
                    <p className="button_headline">Intermediate</p>
                </div>
                <div className="button_container">
                    <button className={`category_button ${expertButtonClicked ? 'active' : ''}`} onClick={() => { handleLevel('expert'); handleButtonCategory('expert') }}>
                        <img src={expertButtonClicked ? expertIconActive : expertIcon} alt="" />
                    </button>
                    <p className="button_headline">Expert</p>
                </div>

            </article>
            <Searchbar
                onSearch={handleSearch}
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch(); // Filterung bei Eingabe auslösen
                }}

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


