import '../sass/LandingPage.scss'
// import handstand from '../assets/img/80a1135252f7ce8124a9e0876627b9b86f582cb9.jpg';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <section>
            <div className='handstand'>
                <h1 className='logo'>SILENT MOON</h1>
            </div>
            <h2>We are what we do</h2>
            <p>Thousands of people are using Silent Moon <br /> for meditation and yoga classes.</p>
            <Link to={"/signup"} className='button'><button>SIGN UP</button></Link>
            <Link to={"/login"} className="Link">ALREADY HAVE AN ACCOUNT. <span> LOG IN</span></Link>
        </section>
    );
}

export default LandingPage;