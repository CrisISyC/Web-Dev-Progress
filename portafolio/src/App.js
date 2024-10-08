import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas'

function App() {
  return (
    <div className="App">
      <div>      
        <h1>Peliculas Melas</h1>
        <Peliculas 
        poster='https://th.bing.com/th/id/OIP.Oz1JnhKNWjFphzgxChXkGwAAAA?rs=1&pid=ImgDetMain'
        pelicula='DeadPool'
        director='Ryan Reinols'
        sinopsis='Tremenda pelicula es re hpta'
        />

        <Peliculas 
        poster='https://th.bing.com/th/id/OIP.TQC4jdBCdGTJt_AEvWWEogHaK4?rs=1&pid=ImgDetMain'
        pelicula='DeadPool 3 '
        director='Ryan Reinols'
        sinopsis='Tremenda pelicula es re hpta x3'
        />
      </div>    
    </div>
  );
}

export default App;
