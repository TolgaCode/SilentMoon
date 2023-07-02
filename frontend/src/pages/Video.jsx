import axios from 'axios';
import ReactPlayer from 'react-player/file';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {
    // id gets send with Link-to-path of GalleryItem - id is ObjID from MongoDB 
    let { id } = useParams();
    console.log(id)

    const [video, setVideo] = useState({});

    // api calls specific id and receives corresponding videofile
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos/${id}`)
            .then((res) => setVideo(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            {/* ReactPlayer streams videofile*/}
            <ReactPlayer
                url={import.meta.env.VITE_BE_URL + `/api/videostream/${video.filename}`}
                controls={true}
            />
            <p>${video.description}</p>
        </>
    );
}

export default Video;