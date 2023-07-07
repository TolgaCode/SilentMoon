import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext.jsx";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import VideoSlider from "../components/VideoSlider.jsx";
import HomeTopItem from "../components/HomeTopItem";
import Searchbar from "../components/SearchBar.jsx";
import '../sass/HomeView.scss'
import '../App.scss'


const HomeView = () => {
    const { user } = useContext(UserContext);
    console.log(user);


    // _________________________________
    // RANDOM YOGA-VIDEO
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos`, { withCredentials: true })
            .then((res) => setVideos(res.data))
            .catch((err) => console.error(err));
    }, []);

    const getRandomVideo = () => {
        if (videos.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
    };
    // _________________________________

    return (
        <div className="home_container">
            <h1 className="logoDark">SILENT MOON</h1>
            <article className="welcome_article">
                <h3 className="hdl-medium-green">Namasté {user.name}</h3>
                <p className="description_medium_lightgray">We hope you have a good day</p>
            </article>
            <section className="home_start_section">
                <article className="homeTopItem_container">
                    {getRandomVideo() && (
                        <HomeTopItem
                            key={getRandomVideo()._id}
                            id={getRandomVideo()._id}
                            category={getRandomVideo().category}
                            title={getRandomVideo().title}
                            level={getRandomVideo().level}
                            thumbnail={getRandomVideo().thumbnail}
                        />
                    )}
                    <HomeTopItem />
                </article>

                <div className="searchbar_container">
                    <Searchbar />
                </div>
                <article className="sliderContainer">
                    <div className="recommended-hdl">
                        <h2 className="hdl-medium-green">Recommended Yoga for you</h2>
                    </div>
                    <VideoSlider />
                </article>
                <article className="sliderContainer">
                    <div className="recommended-hdl">
                        <h2 className="hdl-medium-darkgray" >Recommended Meditation for you</h2>
                    </div>
                    <Slider />
                </article>
            </section>
            <Navbar />
        </div>
    );
}

export default HomeView;