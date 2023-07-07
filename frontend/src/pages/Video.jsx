import axios from 'axios';
import ReactPlayer from 'react-player/file';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import redheart from '../assets/img/red_heart.svg'
import emptyheart from '../assets/img/empty_heart.svg'
import BackButton from "../components/BackButton.jsx";
import Navbar from '../components/Navbar.jsx'

import '../sass/Video.scss'

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
            .then((res) => setVideo(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className='videoBackground'>
            <article className='videoSection'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <BackButton />
                {/* ReactPlayer streams videofile*/}
                <div className='player-wrapper'>
                    <ReactPlayer className='react-player'
                        url={import.meta.env.VITE_BE_URL + `/api/videostream/${video.filename}`}
                        controls={true}
                        width='100%'
                        height='100%'
                        loop={true}
                    />
                </div>
                <div className='textSection'>
                    <img src={user.favVideos?.includes(id) ? redheart : emptyheart} alt="" onClick={() => { axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseVideo/${id}`, {}, { withCredentials: true }).then((res) => { setUser(res.data) }) }} />
                    <h2 className="hdl-medium-green title-head">{video.title}</h2>
                    <h2 className="level-head">{video.level}</h2>
                    <p className='description-head'>{video.description}</p>
                </div>
            </article>
            <Navbar />
        </div>
    );
}

export default Video;