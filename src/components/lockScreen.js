import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'


// Renderse lockscreen
const LockScreen = (props) => {

    return (
        <div>
            <div className="lock-display">
                <FontAwesomeIcon ariaHidden="true" icon={faLock} />
            </div>
            <div className="bottom-div-lock">
                <h3>Press Centre Button to unlock!</h3>
            </div>
        </div>
    )

}


export default LockScreen;