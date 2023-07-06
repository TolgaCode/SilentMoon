import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom"
import '../sass/ProfilPage.scss'

import logoutIcon from '../assets/img/logout_button.svg'
import reminderIcon from '../assets/img/reminder_button.svg'


import Navbar from '../components/Navbar';
import FavVideoSlider from '../components/FavVideoSlider'

const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            <h1>Profil von {user.name}</h1>
            <img src={logoutIcon} alt='logoutIcon' onClick={logout} />
            <Link to={"/reminder"}><img src={reminderIcon} alt='bellIcon' /></Link>
            <FavVideoSlider />
            <Navbar />
        </>
    );
}

export default ProfilPage;