import '../sass/Slider.scss'
import MeditationSliderItem from './MeditationSliderItem.jsx';
import axios from 'axios'
import { useEffect, useState } from 'react';

const MeditationSlider = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/meditationimages`, { withCredentials: true })
            .then((res) => setImages(res.data))
            .catch((err) => console.error(err))
        // if level or category changes through button click the api call retrieves the new asked for data
    }, [])

    return (
        <>
            <article className='slider'>
                {images.length > 0 && images.map((item, i) => {
                    return (
                        <MeditationSliderItem
                            key={i}
                            id={item._id}
                            category={item.category}
                            level={item.level}
                            filename={item.filename}
                            title={item.title}
                        />
                    )
                })}
            </article>
        </>
    );
}

export default MeditationSlider;