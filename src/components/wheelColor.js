import React from 'react';
import "../style/themes.css"

// Render wheel color change menu
const WheelColor = (props) => {

    const { active } = props;
    return (
        <div className="music">
            <h2>Wheel Color Select</h2>
            <ul>
                {["Black", "White", "Brown", "Purple"].map((element, index) => {
                    return active === index ? <li key={index} className="active theme-li">{element}</li> : <li className="theme-li" key={index}>{element} </li>
                })}
            </ul>
        </div>

    )


}


export default WheelColor;