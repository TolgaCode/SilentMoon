import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

import Navbar from '../components/Navbar';
// import LogOut from "../components/LogOut";


const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);
    console.log(user);


    // useEffect(() => {
    //     axios.get("/api/verified", { withCredentials: true })
    //         .then((res) => {
    //             console.log(res);
    //             // setUser(res.data);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }, []);


    return (
        <>
            <h1>Profil von {user.name}</h1>
            <button onClick={logout}>Logout</button>
            {/* <LogOut /> */}
            <Navbar />
        </>
    );
}

export default ProfilPage;