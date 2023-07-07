import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../sass/HomeTopItem.scss';

const HomeTopItem = () => {
    const [randomVideo, setRandomVideo] = useState(null);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BE_URL + `/api/yogavideos`, { withCredentials: true })
            .then((res) => {
                if (res.data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * res.data.length);
                    setRandomVideo(res.data[randomIndex]);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    if (!randomVideo) {
        return null;
    }

    const thumbnailStyle = {
        backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/thumbnail/${randomVideo.thumbnail})`,
    };

    return (
        <div className="home_item" style={thumbnailStyle}>
            <h3 className="home_item_headline">{randomVideo.category}</h3>
            <p className="home_item_level">{randomVideo.level}</p>
            <div className="home_item_bottom">
                <Link to={`/video/${randomVideo._id}`}>
                    <button className="home_topItem_btn">START</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeTopItem;