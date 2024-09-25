import React from "react";
import './Hero.css';
import '../../App.css';

import noim from '../../Assets/noim.png';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h1>Public<br/>Partners</h1>
                <p>
                    Vítejte v Public Partners, vašem spolehlivém partnerovi pro zakládání firem, 
                    účetní operace a personální řešení. Nabízíme komplexní služby, které zahrnují 
                    vše od zakládání firem až po zajišťování víz a administrativních úkonů, čímž vám 
                    usnadňujeme podnikání. S Public Partners je vaše podnikání efektivnější, 
                    snadnější a připravené na růst.
                </p>
                <button>Rezervace</button>
            </div>
            <div className="hero-right">
                <img src={noim} alt="hero-pic"/>
                <div className="but-holder">
                    <button/>
                    <button/>
                    <button/>
                    <button/>
                </div>
            </div>
        </div>
    )
}

export default Hero;