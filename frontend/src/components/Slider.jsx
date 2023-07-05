import '../sass/Slider.scss'
import SliderItem from './SliderItem';

const Slider = () => {

    return (
        <>
            <article className='slider'>
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </article>
        </>
    );
}

export default Slider;