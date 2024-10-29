import './App.css';
import logoApp from './imagenes/codeblack_logo.png';
import Button from './components/Boton';

function App() {

  const manejoClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () =>{
    console.log("Reiniciar");
    
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
        <Button
          text="Clic"
          esBotonClic={true}
          manejoClic={manejoClic()}/>
        <Button
          text="Reiniciar"
          esBotonClic={false}
          manejoClic={reiniciarContador()}/>
      </div>
    </div>
  );
}

export default App;
