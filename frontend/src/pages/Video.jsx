import axios from 'axios';
import ReactPlayer from 'react-player/file';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {
    let { id } = useParams();
    console.log(id)

    const [video, setVideo] = useState({});
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos/${id}`)
            .then((res) => setVideo(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <h3>Hier gibts videos</h3>
            <ReactPlayer
                url={import.meta.env.VITE_BE_URL + `/api/videostream/${video.filename}`}
                controls={true}
            />
        </>
    );
}

export default Video;