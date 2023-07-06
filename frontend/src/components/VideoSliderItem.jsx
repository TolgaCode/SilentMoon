import '../sass/SliderItem.scss'
import { Link } from 'react-router-dom'

const VideoSliderItem = (props) => {
    return (
        <div className="slider_item_container">
            <Link to={`/video/${props.id}`}><img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`} alt="thumbnail" className="slider_img" /></Link>
            <h2 className='category'>{props.category}</h2>
            <div>
                <p className='slider_description'>{props.level}</p>
            </div>
        </div >
    );
}

export default VideoSliderItem;