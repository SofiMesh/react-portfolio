import LogoTitle from '../assets/images/logo-s.png';



const Home = () => {

    return (
        <div claasName="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"  />
                Sofi
                <br />
                web developer
                </h1>
                <h2>Frontend developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}



export default Home