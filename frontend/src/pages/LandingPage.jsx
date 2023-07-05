import '../sass/LandingPage.scss'
// import handstand from '../assets/img/80a1135252f7ce8124a9e0876627b9b86f582cb9.jpg';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <section className='landingContainer'>
            <div className='handstand'>
                <h1 className='logoDark'>SILENT MOON</h1>
            </div>
            <h2 className='intro-Hdl'>We are what we do</h2>
            <p className='intro-Text'>Thousand of people are using silent moon <br /> for meditation and yoga classes.</p>
            <Link to={"/signup"} className="intro-Btn-Link" ><button className='bigBtn-red'>SIGN UP</button></Link>
            <Link to={"/login"} className="intro-Link">ALREADY HAVE AN ACCOUNT? <span> LOG IN</span></Link>
        </section>
    );
}

export default LandingPage;