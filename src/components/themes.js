import React from 'react';
import "../style/themes.css"

// Renders themes menu
const Themes = (props) => {

    const { active } = props;
    return (
        <div className="music">
            <h2>Theme Select</h2>
            <ul>
                {["Rose Gold", "Space Gray", "Gold", "Light Purple", "Black"].map((element, index) => {
                    return active === index ? <li key={index} className="active theme-li">{element}</li> : <li className="theme-li" key={index}>{element} </li>
                })}
            </ul>
        </div>

    )


}


export default Themes;