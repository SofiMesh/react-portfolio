import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';




const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animation')
    const nameArray = ['o', 'f', 'i']
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"  />
                <AnimatedLetters letterClass={letterClass} />
                
                ofi
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