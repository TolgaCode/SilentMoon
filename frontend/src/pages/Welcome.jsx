import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import '../sass/Welcome.scss'
import Navbar from '../components/Navbar'

const Welcome = () => {
    const { user } = useContext(UserContext);
    console.log(user);


    return (
        <section>
            <section className="welcome_section">
                <h1 className='logoLight'>SILENT MOON</h1>
                <article className='welcome_text_container'>
                    <h2 className='welcome_text'>Hi {user.name}, welcome to Silent Moon</h2>
                </article>

            </section>
            <Link to={"/reminder"}><button className='bigBtn-red welcome'>GET STARTED</button></Link>
        </section>
    );
}

export default Welcome;