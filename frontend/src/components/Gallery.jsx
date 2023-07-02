import axios from "axios";

import { useEffect, useState } from "react";
import anxiousIcon from '../assets/img/anxious_button.svg';
import sleepIcon from '../assets/img/sleep_button.svg';
import GalleryItem from "./GalleryItem.jsx";

import "../sass/Gallery.scss";

const Gallery = () => {

    // setup of states

    const [videos, setVideos] = useState([]);
    const [level, setLevel] = useState(undefined);
    const [category, setCategory] = useState(undefined);

    // api call can retrieve all videos or videos specified by asking for level and category 
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?level=${level}&category=${category}`)
            .then((res) => setVideos(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [level, category])

    console.log(videos)

    return (
        <section>
            <div>
                <button onClick={() => { setCategory('stressrelief') }}><img src={anxiousIcon} alt="" /></button>
                <button onClick={() => { setCategory('flexability') }}><img src={sleepIcon} alt="" /></button>
                <button onClick={() => { setCategory('strength') }}><img src={sleepIcon} alt="" /></button>
                <button onClick={() => { setLevel('beginner') }}>Beginner</button>
                <button onClick={() => { setLevel('intermediate') }}>Intermediate</button>
                <button onClick={() => { setLevel('expert') }}>Expert</button>
            </div>

            {videos.length > 0 && videos.map((item, i) => {
                return (
                    <GalleryItem
                        key={i}
                        id={item._id}
                        category={item.category}
                        thumbnail={item.thumbnail}
                    />
                )
            })}
            {videos.length === 0 && (
                <div>Sorry no videos found</div>
            )}
        </section>
    );
}


export default Gallery;