import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import '../sass/HomeView.scss'

const HomeView = () => {


    return (
        <>
            <h1>Home</h1>
            <section className="home_start_session">
                <div className="home_item">
                    <h3>Healthy Back</h3>
                    <p>BEGINNER</p>

                </div>
            </section>
            <section>
                <h2>Recomended Yoga for you</h2>
                <Slider />
            </section>
            <section>
                <h2>Recomended Meditation for you</h2>
                <Slider />
            </section>

            <Navbar />
        </>
    );
}

export default HomeView;