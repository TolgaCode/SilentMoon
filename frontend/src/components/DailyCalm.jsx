import '../sass/DailyCalm.scss'
import { Link } from 'react-router-dom';
import playButton from '../assets/img/daily_calm_button.svg'

const DailyCalm = (props) => {
    return (
        <section className="daily_calm_section">
            <div>
                <h3>Daily Calm</h3>
                <p>Monat Tag</p>
            </div>
            <div>
                <Link to={`/video/${props.id}`}><img src={playButton}></img></Link>
            </div>
        </section>
    );
}

export default DailyCalm;