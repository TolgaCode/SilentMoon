import { Link } from 'react-router-dom'
import '../sass/SliderItem.scss'

const FavVideoSliderItem = (props) => {
    return (
        <div className="slider_item_container">
            <Link to={`/video/${props.id}`}><img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`} alt="thumbnail" className="slider_img" /></Link>
            <h3>{props.category}</h3>
            <div className='slider_description'>
                <p>{props.level}</p>
            </div>
        </div>
    );
}

export default FavVideoSliderItem;