//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SecondsCounter = (props) =>{
    return (
        <div className="bg-dark text-center text-light counter">
            <div><i className="far fa-clock"></i></div>
            <div className="five">{props.FIVE % 10}</div>
            <div className="four">{props.FOUR % 10}</div>
            <div className="three">{props.THREE % 10}</div>
            <div className="two">{props.TWO % 10}</div>
            <div className="one">{props.ONE % 10}</div>
            <div>,</div>
            <div className="decimal">{props.DECIMAL % 10}</div>
        </div>
    )
}
SecondsCounter.PropTypes = {
    ONE: PropTypes.number,
    TWO: PropTypes.number,
    THREE: PropTypes.number,
    FOUR: PropTypes.number,
    FIVE: PropTypes.number,
    DECIMAL: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const five = Math.floor(counter/100000);
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    const decimal = Math.floor(counter/1);
    counter ++;

    ReactDOM.render(<SecondsCounter ONE={one} TWO={two} THREE={three} FOUR={four} FIVE={five} DECIMAL={decimal} />, document.querySelector("#app"));
},100)