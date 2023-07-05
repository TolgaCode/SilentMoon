import '../sass/Slider.scss'
import SliderItem from './SliderItem';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Slider = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos`, { withCredentials: true })
            .then((res) => setVideos(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [])

    return (
        <>
            <article className='slider'>
                {videos.length > 0 && videos.map((item, i) => {
                    return (
                        <SliderItem
                            key={i}
                            id={item._id}
                            category={item.category}
                            thumbnail={item.thumbnail}
                            level={item.level}
                        />
                    )
                })}
            </article>
        </>
    );
}

export default Slider;