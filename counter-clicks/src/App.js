import './App.css';
import logoApp from './imagenes/codeblack_logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicNumber, setClicNumber] = useState(0);

  const manejoClic = () => {
    setClicNumber(clicNumber + 50);
  }

  const reiniciarContador = () =>{
    setClicNumber(0);
  }

  return (
    <div className="App">
      <div className='logoAplicacion-contenedor'>
        <img
          className='logoApp-logo'
          src={logoApp}
          alt='logo de la app'/>
      </div>  
      <div className='contenedor-principal'>
        <Counter
          clicNumber={clicNumber}/>
        <Button
          text='Clic'
          esBotonClic={true}
          manejoClic={manejoClic}/>
        <Button
          text='Reiniciar'
          esBotonClic={false}
          manejoClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
