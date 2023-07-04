import '../sass/Welcome.scss'

const Welcome = () => {
    return (
        <section className="welcome_section">
            <h1 className='logoLight'>SILENT MOON</h1>
            <article>
                <h2 className='welcome_text'>Hi Name, welcome to Silent Moon</h2>
            </article>
            <button className='bigBtn-red'>GET STARTED</button>
        </section>
    );
}

export default Welcome;