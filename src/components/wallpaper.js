import React from 'react';

// Renders wallpaper menu
const Wallpaper = (props) => {

    const { active } = props;
    return (
        <div className="music">
            <h2>Wallpaper Select</h2>
            <ul>
                {["AudioTapes", "BlueCubes", "BlueJelly"].map((element, index) => {
                    return active === index ? <li key={index} className="active theme-li">{element}</li> : <li className="theme-li" key={index}>{element} </li>
                })}
            </ul>
        </div>

    )
}

export default Wallpaper;