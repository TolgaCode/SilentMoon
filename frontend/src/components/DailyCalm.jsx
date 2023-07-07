import '../sass/DailyCalm.scss'
import { Link } from 'react-router-dom';
import playButton from '../assets/img/daily_calm_button.svg'

const DailyCalm = (props) => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    return (
        <section className="daily_calm_section">
            <div>
                <h3 className='daily_calm_headline'>Daily Calm</h3>
                <p className='day_month_daily'>{`${month} ${day}`}</p>
            </div>
            <div>
                <Link to={`/video/${props.id}`}><img src={playButton} className='play_button_dailycalm'></img></Link>
            </div>
        </section>
    );
}

export default DailyCalm;