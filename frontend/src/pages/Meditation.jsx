import Navbar from '../components/Navbar'
// import GalleryMeditation from '../components/GalleryMeditation'

const Meditation = () => {


    return (
        <>
            <section className='yoga_site_container'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <h2 className='hdl-gray-sites'>Meditate</h2>
                <h3 className='subhead-sites'>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</h3>

                {/* <GalleryMeditation /> */}
            </section>
            <Navbar />
        </>
    );
}

export default Meditation;