import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom"
import "../sass/ProfilPage.scss"
import "../sass/SliderItem.scss"

import moIcon from "../assets/img/mo_btn.svg";
import moActIcon from "../assets/img/mo_active_btn.svg";
import tuIcon from "../assets/img/tu_btn.svg";
import tuActIcon from "../assets/img/tu_active_btn.svg";
import weIcon from "../assets/img/we_btn.svg";
import weActIcon from "../assets/img/we_active_btn.svg";
import thIcon from "../assets/img/th_btn.svg";
import thActIcon from "../assets/img/th_active_btn.svg";
import frIcon from "../assets/img/fr_btn.svg";
import frActIcon from "../assets/img/fr_active_btn.svg";
import saIcon from "../assets/img/sa_btn.svg";
import saActIcon from "../assets/img/sa_active_btn.svg";
import suIcon from "../assets/img/su_btn.svg";
import suActIcon from "../assets/img/su_active_btn.svg";


import logoutIcon from "../assets/img/logout_button.svg"
import reminderIcon from "../assets/img/reminder_button.svg"


import Navbar from "../components/Navbar";
import FavVideoSlider from "../components/FavVideoSlider"
import FavMeditationSlider from "../components/FavMeditationSlider"

const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            <h1 className="logoDark">SILENT MOON</h1>
            <section className="profilSection">
                <article className="nameLogoutSection">
                    <h2 className="nameHeadline">Hey {user.name}</h2>
                    <img src={logoutIcon} alt="logoutIcon" onClick={logout} className="iconSize" />
                </article>
                <div className="reminderSection">
                    <article className="iconTime">
                        <p className="showTime">{user.reminder?.time}</p>
                        <Link to={"/reminder"}><img src={reminderIcon} alt="bellIcon" className="iconSize" /></Link>
                    </article>
                    <div className="weekdays">
                        <img src={user.reminder?.days.includes("mo") ? moActIcon : moIcon} alt="" />
                        <img src={user.reminder?.days.includes("tu") ? tuActIcon : tuIcon} alt="" />
                        <img src={user.reminder?.days.includes("we") ? weActIcon : weIcon} alt="" />
                        <img src={user.reminder?.days.includes("th") ? thActIcon : thIcon} alt="" />
                        <img src={user.reminder?.days.includes("fr") ? frActIcon : frIcon} alt="" />
                        <img src={user.reminder?.days.includes("sa") ? saActIcon : saIcon} alt="" />
                        <img src={user.reminder?.days.includes("su") ? suActIcon : suIcon} alt="" />
                    </div>
                </div>
                <h2 className="hdl-medium-green">Find your yoga favorites here</h2>
                <FavVideoSlider className="profilSliderStyle" />
                <h2 className="hdl-medium-green">Find your meditations favorites here</h2>
                <FavMeditationSlider className="profilSliderStyle" />
            </section>
            <Navbar />
        </>
    );
}

export default ProfilPage;