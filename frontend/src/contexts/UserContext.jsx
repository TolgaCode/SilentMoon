import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + "/api/verified", { withCredentials: true })
            .then((resp) => setUser(resp.data))
            .catch((e) => {
                // ----?----
                //navigate('/login')
                // console.log(e);
                // ----?----
            });
    }, [navigate])

    const logout = async () => {
        await axios.get(import.meta.env.VITE_BE_URL + "/api/logout", { withCredentials: true })
            .then((res) => {
                setUser({});
                navigate("/")
            })
    };


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                // name: "TestContext",
                // surname: "TestSurname",
                // email: "Test@context.de"
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
