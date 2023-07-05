import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery';

const Meditation = () => {


    return (
        <>
            <section className='yoga_site_container'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <h2 className='hdl-gray-sites'>Meditation</h2>
                <h3 className='subhead-sites'>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</h3>

                <Gallery />
            </section>
            <Navbar />
        </>
    );
}

export default Meditation;