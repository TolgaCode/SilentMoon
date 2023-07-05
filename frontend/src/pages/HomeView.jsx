import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import VideoSlider from "../components/VideoSlider.jsx";
import HomeTopItem from "../components/HomeTopItem";
import '../sass/HomeView.scss'
import '../App.scss'


const HomeView = () => {
    const { user } = useContext(UserContext);
    console.log(user);


    return (
        <div className="home_container">
            <h1 className="logoDark">SILENT MOON</h1>
            <article className="welcome_article">
                <h3 className="hdl-medium-green">Namasté {user.name}</h3>
                <p className="description_medium_lightgray">We hope you have a good day</p>
            </article>
            <section className="home_start_section">
                <article>
                    <HomeTopItem />
                </article>

                <article>
                    <h2>Recommended Yoga for you</h2>
                    <VideoSlider />
                </article>
                <article>
                    <h2>Recommended Meditation for you</h2>
                    <Slider />
                </article>

            </section>
            <Navbar />
        </div>
    );
}

export default HomeView;