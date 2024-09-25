import React from 'react';
import './Footer.css';
import '../../App.css';

import pubgrey from '../../Assets/logo.png';
import insta from '../../Assets/insta.png';
import fb from '../../Assets/fb.png';
import twit from '../../Assets/twit.png';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='foot-holder'>
                <div className='foot-left'>
                    <img src={pubgrey} alt='pubgrey'/>
                </div>
                <div className='foot-right'>
                    <p>
                        Telefon: +420 111 222 333
                        <br/>
                        e-mail: theEmail@gmail.com
                    </p>
                    <div className='link-holder'>
                        <a href='https://www.instagram.com'>
                            <img src={insta} alt='instagram'/>
                        </a>
                        <a href='https://www.facebook.com'>
                            <img src={fb} alt='facebook'/>
                        </a>
                        <a href='https://www.twitter.com'>
                            <img src={twit} alt='twitter'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='foot-copy'>
                <p>Made by Tomas Handzel © 2024</p>
            </div>
        </div>
    )
}

export default Footer;