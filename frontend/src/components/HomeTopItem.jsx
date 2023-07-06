import '../sass/HomeTopItem.scss'
import { Link } from 'react-router-dom';


const HomeTopItem = (props) => {

    // const thumbnailUrl = `${import.meta.env.VITE_BE_URL}/api/thumbnail/${props.thumbnail}`;
    // const thumbnailStyle = {
    //     backgroundImage: `url(${thumbnailUrl})`,
    // };
    // console.log(import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`);


    const thumbnailStyle = {
        backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/thumbnail/${props.thumbnail})`
    }

    return (
        <div className="home_item" style={thumbnailStyle}>
            <h3 className='home_item_headline'>{props.category}</h3>
            <p className='home_item_level'>{props.level}</p>
            <div className='home_item_bottom'>
                <Link to={`/ video / ${props.id}`}>
                    <button className='home_topItem_btn' >START</button>
                </Link>
            </div>

        </div>
    );
}
// style={{
//     backgroundImage: `url(${ image })`,
// }} 
export default HomeTopItem;