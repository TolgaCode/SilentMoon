import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import redheart from '../assets/img/red_heart.svg'
import emptyheart from '../assets/img/empty_heart.svg'
import { UserContext } from '../contexts/UserContext';
import "../sass/GalleryItem.scss";
import axios from "axios";

const GalleryMeditationItem = (props) => {
    const { user, setUser } = useContext(UserContext);
    const [size, setSize] = useState("");

    useEffect(() => {
        let number = Math.floor(Math.random() * 3) + 1;

        if (number === 1) {
            setSize("thumbnailSmall");
        } else if (number === 2) {
            setSize("thumbnailMedium");
        } else if (number === 3) {
            setSize("thumbnailLarge");
        }
    }, []);

    const backgroundImageStyle = {
        backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/image/${props.filename})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
    };

    return (
        <div className={`gallery_item ${size}`} style={backgroundImageStyle}>

            <img src={user.favMeditations?.includes(props.id) ? redheart : emptyheart} alt="" onClick={() => { axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseMeditation/${props.id}`, {}, { withCredentials: true }).then((res) => { setUser(res.data) }) }} />
            <Link to={"/music"} >
                <div >
                    <h3 className="video_category_headline">{props.category}</h3>
                </div >
            </Link >
        </div>

    )
};

export default GalleryMeditationItem;


