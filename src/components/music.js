import React from 'react';
import "../style/music.css"

// Renders music menu
const Music = (props) => {

    const { musicItems, active } = props;
    return (
        <div className="music">
            <h2>Music</h2>
            <ul>
                {musicItems.map((element, index) => {
                    return active === index ? <li key={index} className="active">&nbsp;{element}</li> : <li key={index}>&nbsp;{element}</li>
                })}
            </ul>
        </div>

    )


}


export default Music;