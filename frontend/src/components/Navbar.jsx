import '../sass/Navbar.scss'
// import { Link } from 'react-router-dom';
import yogaIcon from '../assets/img/moon.svg'
import yogaActive from '../assets/img/yoga_active.svg'
import meditateActive from '../assets/img/meditate_active.svg'
import meditateIcon from '../assets/img/meditate.svg'
import homeIcon from '../assets/img/home.svg'
import homeActive from '../assets/img/home_active.svg'
import musicIcon from '../assets/img/music.svg'
import musicActive from '../assets/img/music_active.svg'
import profileIcon from '../assets/img/profile.svg'
import profileActive from '../assets/img/profile_active.svg'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const routeStates = {
        '/yoga': { isActive: false, icon: yogaIcon, activeIcon: yogaActive },
        '/meditation': { isActive: false, icon: meditateIcon, activeIcon: meditateActive },
        '/home': { isActive: false, icon: homeIcon, activeIcon: homeActive },
        '/music': { isActive: false, icon: musicIcon, activeIcon: musicActive },
        '/profile': { isActive: false, icon: profileIcon, activeIcon: profileActive },
    };

    useEffect(() => {
        const updatedRouteStates = { ...routeStates };

        Object.keys(updatedRouteStates).forEach((route) => {
            updatedRouteStates[route].isActive = location.pathname === route;
        });

        setRouteStates(updatedRouteStates);
    }, [location]);

    const [activeRoute, setRouteStates] = useState(routeStates);

    return (
        <section className="navcontainer">
            <nav>
                {Object.keys(activeRoute).map((route) => (
                    <NavLink
                        key={route}
                        to={route}
                        className={`linkscontainer ${activeRoute[route].isActive ? 'active' : ''}`}
                        activeclassname="active"
                    >   <div className='iconcontainer'>
                            <img alt="moon icon" src={activeRoute[route].isActive ? activeRoute[route].activeIcon : activeRoute[route].icon} className="hovericon" />
                        </div>

                        <span className={`link-text ${activeRoute[route].isActive ? 'active' : ''}`}>{route.slice(1)}</span>
                    </NavLink>
                ))}
            </nav>
        </section>
    );
}

export default Navbar;
