import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar'
import "../sass/Yoga.scss";
// import Searchbar from '../components/SearchBar';

const Yoga = () => {


    return (
        <>
            <section className='yoga_site_container'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <h2 className='hdl-gray-sites'>Yoga</h2>
                <h3 className='subhead-sites'>Find your inner zen from annywhere.</h3>

                <Gallery />
            </section>
            <Navbar />
        </>
    );
}

export default Yoga;