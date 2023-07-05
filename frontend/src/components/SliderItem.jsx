import '../sass/SliderItem.scss'
import testBild from '../assets/img/ee3361fac4a26a3b7f10d9f6b2152d689bf972dd.jpg'

const SliderItem = () => {
    return (
        <div className="slider_item_container">
            <img src={testBild} className='slider_img'></img>
            <h3>Recovery</h3>
            <div className='slider_description'>
                <p>BEGINNER</p>
                <p>3-10 MIN</p>
            </div >
        </div >
    );
}

export default SliderItem;