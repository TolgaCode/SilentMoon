import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import '../sass/Welcome.scss'
import Navbar from '../components/Navbar'

const Welcome = () => {
    const { user } = useContext(UserContext);
    console.log(user);


    return (
        <section className="welcome_section">
            <h1 className='logoLight'>SILENT MOON</h1>
            <article>
                <h2 className='welcome_text'>Hi {user.name}, welcome to Silent Moon</h2>
            </article>
            <button className='bigBtn-red'>GET STARTED</button>
            <Navbar />
        </section>

    );
}

export default Welcome;