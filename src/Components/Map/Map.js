import React from 'react';
import './Map.css';
import '../../App.css';

const Map = () => {
    return(
        <div className='map'>
            <h1>KDE NÁS<br/>NAJDETE</h1>
            <div className='map-holder'>
                <div className='map-left'>
                    <p>Jak se k nám dostanete:</p>
                    <p>
                        Milady Horákové 481/24
                        <br/>
                        Praha 7
                        <br/>
                        170 00
                    </p>
                    <p>
                        Po-Pá: 9:00 - 18:00
                        <br/>
                        So-Ne: Zavřeno
                    </p>
                    <p>
                        +420 111 222 333
                        <br/>
                        theEmail@gmail.com
                    </p>
                </div>
                <div className='map-right'>
                    <iframe id='gmap' src='https://maps.google.com/maps?q=M.%20Hor%C3%A1kov%C3%A9%20481,%20170%2000%20Praha%207-Hole%C5%A1ovice,%20%D0%A7%D0%B5%D1%85%D0%B8%D1%8F&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='gmap'>
                        #dokument (https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1zTS4gSG9yw6Frb3bDqSA0ODEsIDE3MCAwMCBQcmFoYSA3LUhvbGXFoW92aWNlLCDQp9C10YXQuNGP!6i13)
                    </iframe>
                </div>
            </div>
            <button>Rezervace</button>
        </div>
    )
}

export default Map;