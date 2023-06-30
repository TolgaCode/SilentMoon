import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import HomeTopItem from "../components/HomeTopItem";
import '../sass/HomeView.scss'
import '../App.scss'


const HomeView = () => {


    return (
        <>
            <h1 className="logoDark">SILENT MOON</h1>
            <section className="home_start_section">
                <article>
                    <HomeTopItem />
                </article>

                <article>
                    <h2>Recomended Yoga for you</h2>
                    <Slider />
                </article>
                <article>
                    <h2>Recomended Meditation for you</h2>
                    <Slider />
                </article>

                <Navbar />
            </section>
        </>
    );
}

export default HomeView;