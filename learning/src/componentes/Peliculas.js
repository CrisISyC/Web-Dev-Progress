import React from 'react';
import '../stylesheets/Peliculas.css';

function Peliculas(props){

    return(
      <div className='contenedor-pelicula'>
        <img  className='image-pelicula' 
        src={props.poster}
        alt='Portada de la pelicula' />
        <div className='contenedor-texto-pelicula'>
          <p className='nombre-pelicula'> {props.pelicula}</p>
          <p className='director-pelicula'>{props.director}</p>
          <p className='sinopsis-pelicula'>{props.sinopsis}</p>
        </div>
      </div>  
    );
}

export default Peliculas;