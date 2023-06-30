import '../sass/Slider.scss'
import SliderItem from './SliderItem';

const Slider = () => {

    return (
        <>
            <article className='slider'>
                {/* {data.map((item) => {
                    return (
                        <SliderItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            level={item.level}
                            duration={item.duration}
                        />
                    )
                })} */}
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