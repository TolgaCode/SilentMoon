import '../sass/Navbar.scss'
import { Link } from 'react-router-dom';
import yogaIcon from '../assets/img/moon.svg'
import meditateIcon from '../assets/img/meditate.svg'
import homeIcon from '../assets/img/home.svg'
import musicIcon from '../assets/img/music.svg'
import profileIcon from '../assets/img/profile.svg'

const Navbar = () => {
    return (
        <section className="navcontainer">
            <nav>
                <Link to="/yoga" className='iconcontainer' >
                    <div className='iconNav'>
                        <img alt="moon icon" src={yogaIcon} /></div>
                    Yoga</Link>
                <Link to="/meditate" className='iconcontainer' >
                    <div className='iconNav'>
                        <img alt="meditate icon" src={meditateIcon} />
                    </div>
                    Meditate</Link>
                <Link to="/homeview" className='iconcontainer' >
                    <div className='iconNav'>
                        <img alt="home icon" src={homeIcon} />
                    </div>
                    Home</Link>
                <Link to="/music" className='iconcontainer' >
                    <div className='iconNav'>
                        <img alt="music icon" src={musicIcon} />
                    </div>
                    Music</Link>
                <Link to="/profile" className='iconcontainer' >
                    <div className='iconNav'>
                        <img alt="profil icon" src={profileIcon} />
                    </div>
                    Profil</Link>
            </nav>

        </section>
    );
}

export default Navbar;