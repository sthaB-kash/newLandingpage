import React from 'react'
import ReactDom from 'react-dom'

function DateTime () {
    return (
        <>
            <div id="dateTime">
            {setInterval(Tick, 1000)}
            </div>
        </>
    );
}

const Tick = () => {
    const ele = <h2 style = {{textAlign: 'right', color: 'GrayText', paddingRight: '25px'}}>{new Date().toLocaleString()}</h2>;
    ReactDom.render(ele, document.getElementById('dateTime'));
};

export default DateTime