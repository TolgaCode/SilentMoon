import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import HomeTopItem from "../components/HomeTopItem";
import Searchbar from "../components/SearchBar.jsx";
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
                <article className="homeTopItem_container">
                    <HomeTopItem />
                    <HomeTopItem />
                </article>
                <div className="searchbar_container">
                    <Searchbar />
                </div>
                <article className="sliderContainer">
                    <h2 className="hdl-medium-green">Recommended Yoga for you</h2>
                    <Slider />
                </article>
                <article className="sliderContainer">
                    <h2 className="hdl-medium-darkgray" >Recommended Meditation for you</h2>
                    <Slider />
                </article>

            </section>
            <Navbar />
        </div>
    );
}

export default HomeView;