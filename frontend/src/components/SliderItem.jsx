import '../sass/SliderItem.scss'
import { Link } from 'react-router-dom'
// import testBild from '../assets/img/ee3361fac4a26a3b7f10d9f6b2152d689bf972dd.jpg'

const SliderItem = (props) => {
    return (
        <div className="slider_item_container">
            <Link to={`/video/${props.id}`}><img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`} alt="thumbnail" className="slider_img" /></Link>
            <h2>{props.title}</h2>
            <div>
                <p>{props.level}</p>
                <p>{props.duration}</p>
            </div>
            {/* <img src={testBild} className='slider_img'></img>
            <h3>Recovery</h3>
            <div className='slider_description'>
                <p>BEGINNER</p>
                <p>3-10 MIN</p> */}
        </div >
    );
}

export default SliderItem;