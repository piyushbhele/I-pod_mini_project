import React, { useState, useEffect } from 'react';
import "../style/navbar.css"
import BatImg from "../static/battery.png"

// Renders navbar
const Navbar = (props) => {

    // fir getting current time in string
    const getCurrentTime = () => {
        const today = new Date();
        var currTime = today.getHours() + ":" + today.getMinutes();
        if (today.getMinutes() < 10) {
            currTime = today.getHours() + ":0" + today.getMinutes();
        }
        return currTime;
    }

    const [time, setTime] = useState(getCurrentTime())
    const [stateId, setStateId] = useState("");

    // if there is no notification then iPod logo, time and battery icon
    // If there is a notification show it for 1 second and clear it
    useEffect(() => {
        const { setNoty, noty } = props;

        if (noty === true) {
            setTimeout(function () {
                setNoty();
            }, 1000)
        }

        // Clear the update time interval
        if (noty !== true)
            clearInterval(stateId);


        // set an interval of 60 seconds to update time
        setStateId(setInterval(() => {
            setTime(getCurrentTime());
        }, 60000))


    }, [stateId, props])



    // Render navbar to show either ipod logo, time or Notification


    const { playing, noty, notifyText } = props;
    return (
        <div className="bar">
            {<h5 className="heading">iPod <i className="fas fa-wifi"></i></h5>}
            {noty === true && <h5 className="notification">{notifyText}</h5>}
            {noty === false && <h3 className="time">{time}</h3>}
            {<div className="right-container-nav">
                {playing ? <h5 className="play-pause-nav"><i className="fas fa-play"></i></h5> : <h5 className="play-pause-nav"><i className="fas fa-pause"></i> </h5>}
                <img className="battery" src={BatImg} alt="Battery" />
            </div>}
        </div>
    )

}


export default Navbar;