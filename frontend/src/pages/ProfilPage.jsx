import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import '../sass/ProfilPage.scss'

import Navbar from '../components/Navbar';
import FavVideoSlider from '../components/FavVideoSlider'

const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            <h1>Profil von {user.name}</h1>
            <button onClick={logout}>Log out</button>
            <FavVideoSlider />
            <Navbar />
        </>
    );
}

export default ProfilPage;