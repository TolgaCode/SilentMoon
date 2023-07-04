import axios from 'axios';
import ReactPlayer from 'react-player/file';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import heartIcon from '../assets/img/favorites_button.svg'
import heartIconActive from '../assets/img/favorites_active_button.svg'


import { UserContext } from "../contexts/UserContext";

const Video = () => {
    const { user, setUser } = useContext(UserContext);
    // id gets send with Link-to-path of GalleryItem - id is ObjID from MongoDB 
    let { id } = useParams();
    console.log(id)

    const [video, setVideo] = useState({});

    // api calls specific id and receives corresponding videofile
    useEffect(() => {

        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos/${id}`, { withCredentials: true })
            // axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos/${id}`)
            .then((res) => setVideo(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            {/* ReactPlayer streams videofile*/}
            <img src={user.favVideos.includes(id) ? heartIconActive : heartIcon} alt="" onClick={() => { axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseVideo/${id}`, {}, { withCredentials: true }).then((res) => { setUser(res.data) }) }} />
            <ReactPlayer
                url={import.meta.env.VITE_BE_URL + `/api/videostream/${video.filename}`}
                controls={true}
            />
            <p>{video.description}</p>
        </>
    );
}

export default Video;