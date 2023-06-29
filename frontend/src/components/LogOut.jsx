
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await axios.post("http://localhost:3000/api/logout");
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