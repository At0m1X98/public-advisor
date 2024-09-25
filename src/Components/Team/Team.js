import React from 'react';
import './Team.css';
import '../../App.css';

import teammates from '../../Assets/teammates';
import publicgrey from '../../Assets/publicadvgrey.png';

const Team = () => {
    return(
        <div className='team'>
            <div className='employees'>
            <h1>NÁŠ TEAM</h1>
                {teammates.map(teammate => (
                    <div 
                        key={teammate.id}
                        className={teammate.id % 2 === 0 ? 'right' : 'left'}
                    >
                        <div className='test'>
                            <div className='emp-img'>
                                <img src={teammate.pic} alt='profile pic'/>
                            </div>
                            <div className='emp-container'>
                                <div className='emp-info'>
                                    <h3>{teammate.name}</h3>
                                    <p>{teammate.info}</p>
                                </div>
                                <div className='emp-logo'>
                                    <img src={publicgrey} alt='logo emp'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;