import { useContext} from "react";
import { UserContext } from "../contexts/UserContext";

import Navbar from '../components/Navbar';
// import LogOut from "../components/LogOut";


const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);
    console.log(user);


    return (
        <>
            <h1>Profil von {user.name}</h1>
            <button onClick={logout}>Logout</button>
            <Navbar />
        </>
    );
}

export default ProfilPage;