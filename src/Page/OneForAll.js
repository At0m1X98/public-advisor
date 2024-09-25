import React from 'react';
import '../App.css';
import Hero from '../Components/Hero/Hero';
import arrow from '../Assets/arrow.png';
import Service from '../Components/Service/Service';
import Team from '../Components/Team/Team';
import Map from '../Components/Map/Map';

const OneForAll = () => {
    return(
        <div className='oneforall'>
            <section id="hero" className="hero">
                <Hero/>
            </section>
            <img className='arrow' src={arrow} alt='arrow'/>
            <section id="service" className="service">
                <Service/>
            </section>
            <section id="team" className="team">
                <Team/>
            </section>
            <section id="map" className="map">
                <Map/>
            </section>
        </div>
    )
}

export default OneForAll;