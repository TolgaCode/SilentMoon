
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await axios.post(import.meta.env.VITE_BE_URL + "/api/logout");
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <button onClick={logoutHandler}>LogOut</button>
    );
}

export default LogOut;