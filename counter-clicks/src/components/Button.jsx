import React from "react";
import '../stylesheets/Button.css'


function Button({ text, esBotonClic, manejoClic }) {
    return(
        <button
            className={esBotonClic ? 'boton-clic' : 'boton-reinicio'}
            onClick={manejoClic}>
            {text}
        </button>
    );
}


export default Button;