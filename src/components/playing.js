import React, { useState, useEffect } from 'react';
import "../style/playing.css"

const Playing = (props) => {

    const { audio } = props;
    const [currentTime, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState("");


    // logic for updating the current music playbak
    useEffect(() => {
        const id = setInterval(() => {
            setTime(audio.currentTime);
        }, 100);

        setIntervalId(id);

        // Clear interval for that same thing
        clearInterval(intervalId);
    }, [intervalId, audio.currentTime])


    // Render playing screen
    const { songItems, playing, songIndex, songImgUrl } = props;
    var currentTimeRender = Math.floor(currentTime / 60) + ":" + Math.floor(currentTime % 60);
    var durationRender = Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
    const percentageComplete = { width: (currentTime / audio.duration * 100) + "%" };
    if (durationRender === "NaN:NaN") {
        durationRender = "0:00";
    }
    if (Math.floor(currentTime % 60 < 10)) {
        currentTimeRender = Math.floor(currentTime / 60) + ":0" + Math.floor(currentTime % 60);
    }
    return (
        <div className="now-playing-container">
            <div className="song-details">
                <img src={songImgUrl} alt="songImg"></img>
                <div>
                    <h1>{songItems[songIndex]}</h1>
                    {playing && <h5 className="play-pause-nav">Playing</h5>}
                    {!playing && <h5 className="play-pause-nav">Paused</h5>}
                </div>
            </div>
            <div className="status">
                {currentTimeRender}
                <div id="progress">
                    <div style={percentageComplete} id="progress-bar"></div>
                </div>
                {durationRender}
            </div>
        </div>
    )

}


export default Playing;