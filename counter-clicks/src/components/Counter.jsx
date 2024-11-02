import React from "react";
import '../stylesheets/Counter.css'

function Counter( { clicNumber }){
    return(
        <div className="counter">
            {clicNumber}
        </div>
    );
}

export default Counter;