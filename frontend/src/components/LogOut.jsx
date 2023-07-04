
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "./contexts/UserContext";

// const LogOut = () => {
//     const { user } = useContext(UserContext);
//     const navigate = useNavigate()

//     const logoutHandler = async () => {
//         try {
//             await axios.post(import.meta.env.VITE_BE_URL + "/api/logout", { withCredentials: true })
//                 .then(() => setUser({}))
//             navigate("/")
//         } catch (err) {
//             console.error(err)
//         }
//     }

//     return (
//         <button onClick={logoutHandler}>LogOut</button>
//     );
// }

// export default LogOut;