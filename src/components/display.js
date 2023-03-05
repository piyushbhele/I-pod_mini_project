import React from "react";
import '../style/display.css'
import Menu from "./menu";
import Navbar from './navbar';
import Music from './music';
import Songs from './songs';
import Settings from './settings';
import Playing from './playing';
import Themes from './themes';
import WheelColor from './wheelColor';
import LockScreen from './lockScreen';
import Wallpaper from './wallpaper';

const Display = (props) => {
    const { active, currentMenu, menuItems, musicItems, songItems, playing, songIndex,
        audio, songUrl, songImgUrl, wallpaper, wallpaperItems, noty, notifyText } = props;
    return (
        <div style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }} className="display">
            <Navbar noty={noty} setNoty={props.setNoty} playing={playing} notifyText={notifyText} />
            {currentMenu === -2 && <LockScreen />}
            {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />}
            {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
            {currentMenu === 2 && <div className="blank-div"><h1 className="empty-text">Games</h1></div>}
            {currentMenu === 3 && <Settings active={active} />}
            {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
            {currentMenu === 5 && <div className="blank-div"><h1 className="empty-text">Artists</h1></div>}
            {currentMenu === 6 && <div className="blank-div"><h1 className="empty-text">Albums</h1></div>}
            {(currentMenu === 0 || currentMenu === 7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}
            {currentMenu === 8 && <Themes active={active} />}
            {currentMenu === 9 && <WheelColor active={active} />}
            {currentMenu === 10 && <Wallpaper active={active} />}
        </div>
    )
}

export default Display;