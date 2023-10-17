import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ik9j5yp', 'template_ietiueq', form.current, '3XCTNOk3I-320wv6S')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am currently seeking opportunities in the field of front-end development, 
          specifically for internships or entry-level positions.
           However, I am open to considering any offers that align with my skills
            and career goals. Thank you for your consideration.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
              </li>
                </ul>
              </form>
            </div>
        </div>
        <div className="info-map">
          Sofi Meshvildishvili,
          <br />
          Greater Pittsburgh Area, PA, United States <br />
          <span>sofimeshvildishvili@gmail.com</span>

        </div>
        <div className="map-wrap">
        <MapContainer center={[40.4406, -79.9959]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.4406, -79.9959]}>
              <Popup>Hello from Pittsburgh</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
        <Loader type='pacman' />
        
        
        
        </>
    )
}

export default Contact