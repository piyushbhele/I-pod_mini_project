import React from "react";
import '../style/menu.css'
import nowPlaying from "../static/Besomorph  Silent Child  IDGAF.png"
import game from "../static/game.jpg"
import music from "../static/music.jpg"
import settings from "../static/settings.png"

const Menu = (props) => {
    const { menuItems, active } = props;


    return (
        <div className="menu-container">
            <div className="menu">
                <ul>
                    {menuItems.map((element, index) => {
                        return active === index ? <li key={index} className="active">&nbsp;{element}</li> : <li key={index}>&nbsp;{element}</li>
                    })}
                </ul>
            </div>
            <div className="leaf">
                {active === 0 && <img className="leaf-img" src={nowPlaying} alt=""></img>}
                {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                {active === 3 && <img className="leaf-img" src={settings} alt=""></img>}
            </div>
        </div>
    )
}




export default Menu;