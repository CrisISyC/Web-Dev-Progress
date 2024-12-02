import React from "react";
import { useState } from "react";
import '../stylesheets/UseStateHook.css';


function useStateHook({ valueInput }){
    
    const Chance = require('chance');
    const chance = new Chance();

    const[value, setValue] = useState(valueInput);

    const handleClick = () => {
        setValue(chance.sentence())
    }

    return(
        <div className="principal"
            onClick={handleClick}> 
            {value}
        </div>
    )
}

export default useStateHook;