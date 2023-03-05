import React, { useState, useEffect } from 'react';
import '../style/wheel.css'
import ZingTouch from 'zingtouch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faFastBackward, faFastForward } from '@fortawesome/free-solid-svg-icons'


const Wheel = (props) => {
    const [angle, setAngle] = useState(0);

    const { onChangeMenuForward, active, currentMenu, theme, wheelColor, updateActiveMenu,
        onChangeMenuBackward, togglePlayPause, seekSongForward, seekSongReverse } = props;


    // control the wheel roatation action if rotation is more than 15 degrees
    // and also check direction of rotation
    const wheelControl = (event) => {

        const eventAngle = event.detail.angle;

        if (event.detail.distanceFromOrigin === 0) {
            setAngle(eventAngle);
        }

        if (Math.abs(angle - eventAngle) > 300) {
            setAngle(Math.abs(eventAngle));

            if (event.detail.distanceFromLast === 0) {
                return;
            }

            else if (event.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(angle - eventAngle) > 15) {
            setAngle(Math.abs(eventAngle));

            if (event.detail.distanceFromLast === 0) {
                return;
            }
            else if (event.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }
        }
    }

    // Bind components with zingtouch logic
    useEffect(() => {
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const backward = document.getElementById("backward");
        const playPause = document.getElementById("play-pause");
        const forward = document.getElementById("forward");


        const longTapGesture = new ZingTouch.Tap({
            maxDelay: 10000,
            numInputs: 1,
            tolerance: 1,
        })

        activeRegion.bind(wheel, 'rotate', function (event) {
            wheelControl(event);
        });

        activeRegion.bind(menuIcon, 'tap', function (e) {
            onChangeMenuBackward();
        });

        activeRegion.bind(playPause, 'tap', function (e) {
            togglePlayPause();
        });


        activeRegion.bind(backward, longTapGesture, function (e) {
            seekSongReverse(e);
        });

        activeRegion.bind(forward, longTapGesture, function (e) {
            seekSongForward(e);
        });


    });


    return (
        <div className='wheel-container' id='wheel-container' >
            <div style={{ backgroundColor: wheelColor }} className='wheel' id='wheel'>
                <div className='control' id='menu'>
                    <div style={{ color: theme }}>Menu</div>
                </div>
                <div className='control' id='forward'>
                    <FontAwesomeIcon style={{ color: theme }} icon={faFastForward} />
                </div>
                <div className='control' id='backward'>
                    <FontAwesomeIcon style={{ color: theme }} icon={faFastBackward} />
                </div>
                <div className='control' id='play-pause'>
                    <FontAwesomeIcon style={{ color: theme }} icon={faPlay} />
                    <FontAwesomeIcon style={{ color: theme }} icon={faPause} />
                </div>
            </div>
            <div style={{ backgroundColor: theme }} className='select' id='select'
                onClick={() => onChangeMenuForward(active, currentMenu)}></div>

        </div>
    )
}


export default Wheel;