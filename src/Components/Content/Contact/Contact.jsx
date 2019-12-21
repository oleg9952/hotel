import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import './Contact.css'

const Contact = () => {
    const [ mapViewPort, setMapViewPort ] = useState({
        latitude: 25.774812761223764,
        longitude: -80.19464284409483,
        width: '100%',
        height: '100%',
        zoom: 13.5
    })


    return (
        <div className="contact">
            <div className="contact_map">
                <ReactMapGL 
                    {...mapViewPort}
                    mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZzI1OTkiLCJhIjoiY2s0ZXRlZWp5MGZ4djNubGhudTEycWp1MCJ9.F1pKJlElFS_IFrzQSnPf-Q'}
                    onViewportChange={viewport => setMapViewPort(viewport)}
                    mapStyle={'mapbox://styles/oleg2599/ck4eurf9v0u621cqmo8nxfw2j'}
                >
                    <Marker
                        key={1}
                        latitude={25.777749797856167}
                        longitude={-80.19477159012754}
                    >
                        <button className="location_pin"></button>
                    </Marker>
                </ReactMapGL>
                <form className="contact_form">
                    <div className="contact_info">
                        <h2 className="info_title">Contact Us</h2>
                        <ul className="info_itmes">
                            <li className="info_item">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                Address
                            </li>
                            <li className="info_item">
                                <span>
                                    <i className="far fa-envelope"></i>
                                </span>
                                <a href="mailto: hotel@gmail.com">hotel@gmail.com</a>
                            </li>
                            <li className="info_item">
                                <span>
                                    <i className="fas fa-phone-volume"></i>
                                </span>
                                <a href="tel:380634596786">+380-63-459-6786</a>
                            </li>
                            <li className="info_item">
                                <span>
                                    <i className="fas fa-atlas"></i>
                                </span>
                                <a href="tel:380634596786">+380-63-459-6786</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form_inputs">
                        <h2 className="form_title">Get in Touch</h2>
                        <p className="form_subtitle">Have questions? <br></br> Send us a message and our manager will help you right away!</p>
                        <input 
                            type="text" 
                            name="full-name" 
                            className="contact_input"
                            placeholder="Enter your fullname..."
                        />
                        <input 
                            type="email" 
                            name="email" 
                            className="contact_input"
                            placeholder="Enter your email..."
                        />
                        <textarea 
                            name="message"
                            className="contact_input contact_message"
                            placeholder="Type your message here..."
                        ></textarea>
                        <button type="submit" className="contact_send">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
