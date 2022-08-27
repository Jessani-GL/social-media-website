import React from 'react';

function Popup(props)  {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn btn btn-dark' type="button" onClick={() => props.setTrigger(false)}
                >&#x2715;</button>
                {props.children}
            </div>
        </div>
    )  : "";
}

export default Popup;