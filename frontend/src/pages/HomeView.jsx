import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext.jsx";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import VideoSlider from "../components/VideoSlider.jsx";
import HomeTopItem from "../components/HomeTopItem";

import '../sass/HomeView.scss'
import '../App.scss'


const HomeView = () => {
    const { user } = useContext(UserContext);
    // console.log(user);


    // _________________________________
    // SEARCHBAR




    return (
        <div className="home_container">
            <h1 className="logoDark">SILENT MOON</h1>
            <article className="welcome_article">
                <h3 className="hdl-medium-green">Namasté {user.name}</h3>
                <p className="description_medium_lightgray">We hope you have a good day</p>
            </article>
            <section className="home_start_section">
                <article className="homeTopItem_container">
                    <HomeTopItem />
                    <HomeTopItem />
                </article>
                <VideoSlider />
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