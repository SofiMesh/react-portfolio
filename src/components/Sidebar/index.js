import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img sec={LogoS} alt="logo" />
            <img className='sib-logo' sec={LogoSubtitle} alt="Sofi" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4de" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4de" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4de" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel='noreferral'
                href='https://www.linkedin.com/in/sofi-meshvildishvili/'
                
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel='noreferral'
                href='https://github.com/SofiMesh'
                
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

        </ul>
    </div>
)


export default Sidebar