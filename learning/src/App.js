//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Peliculas from './componentes/Peliculas'
import Footer from './componentes/Footer'


function App() {

  const manejarClick  = () => {
    console.log('Click')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }
  
  return (
    <div className="App">
      <h1>Peliculas Melas</h1>
      <div className='div-peliculas'>      
        <Peliculas 
          poster='https://th.bing.com/th/id/R.3609b116bfe0d75e5dab615066e18914?rik=kQnr9Fb%2bgvIyXw&riu=http%3a%2f%2fcdn.traileraddict.com%2fcontent%2f20th-century-fox%2fdeadpool-poster-10.jpg&ehk=TKXp%2fzST6r8gHxDYwwM%2bD8Yv6%2fm7nB7dQUcComRgikc%3d&risl=&pid=ImgRaw&r=0'
          pelicula='DeadPool'
          director='Tim Miller'
          sinopsis='Un mercenario de lengua rápida y sentido del humor mórbido es sometido a una operación clandestina que le deja 
          con poderes de curación acelerada y en búsqueda de venganza.'
        />

        <Peliculas 
          poster='https://th.bing.com/th/id/OIP.TQC4jdBCdGTJt_AEvWWEogHaK4?rs=1&pid=ImgDetMain'
          pelicula='DeadPool 2'
          director='David Leitch'
          sinopsis='El mercenario mutante malhablado Wade Wilson (también conocido como Deadpool), reúne a un equipo de 
          compañeros mutantes para proteger a un joven con habilidades sobrenaturales del brutal cíborg Cable, que viaja en el tiempo.'
        />

        <Peliculas 
          poster='https://th.bing.com/th/id/OIP.Oz1JnhKNWjFphzgxChXkGwAAAA?rs=1&pid=ImgDetMain'
          pelicula='DeadPool 3'
          director='Shawn Levy'
          sinopsis='La Autoridad de Variación Temporal (AVT) ofrece a Deadpool un lugar en el Universo cinematográfico 
                    de Marvel, pero en su lugar recluta a una variante de Lobezno para salvar su universo de la extinción.'
        />
      </div> 
      <div className='contador-principal'>

      </div>

      <Footer />
    </div>
  );
}

export default App;
