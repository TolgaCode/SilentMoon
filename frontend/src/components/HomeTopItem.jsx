import '../sass/HomeTopItem.scss'
import { Link } from 'react-router-dom';

const HomeTopItem = () => {
    return (
        <div className="home_item" >
            <h3 className='home_item_headline'>Healthy Back</h3>
            <p>BEGINNER</p>
            <div className='home_item_bottom'>
                <p>3-10 MIN</p>
                <Link to={`/login`}>
                    <button className='home_topItem_btn' >START</button>
                </Link>
            </div>

        </div>
    );
}
// style={{
//     backgroundImage: `url(${image})`,
// }} 
export default HomeTopItem;