import '../sass/Welcome.scss'

const Welcome = () => {
    return (
        <section className="welcome_section">
            <h1 className='logo'>SILENT MOON</h1>
            <article>
                <h2 className='welcome_text'>Hi Name, welcome to Silent Moon</h2>
            </article>
            <button>GET STARTED</button>
        </section>
    );
}

export default Welcome;