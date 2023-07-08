import { Link } from 'react-router-dom'
import '../sass/SliderItem.scss'

const FavMeditaionSliderItem = (props) => {
    return (
        <div className="slider_item_container">
            <Link to={`/music`}><img src={import.meta.env.VITE_BE_URL + `/api/image/${props.filename}`} alt="thumbnail" className="slider_img" /></Link>
            <h3 className='category'>{props.title}</h3>
            <div className='slider_description'>
                <p>{props.level}</p>
            </div>
        </div>
    );
}

export default FavMeditaionSliderItem;