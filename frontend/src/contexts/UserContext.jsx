import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BE_URL + "/api/verified")
            .then((resp) => setUser(resp.data))
            .catch((e) => {
                // ----?----
                console.log(e);
                // ----?----
            });
    }, [navigate])

    // const logout = async () => {
    //     await axios.get("/api/logout");
    //     setUser({});
    //     navigate("/");
    // };

    return (
        <UserContext.Provider
            value={{
                user
                // name: "TestContext",
                // surname: "TestSurname",
                // email: "Test@context.de"
                // logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
