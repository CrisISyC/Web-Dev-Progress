import './App.css';
import logoApp from './imagenes/codeblack_logo.png'

function App() {
  return (
    <div className="App">
      <div className='logoAplicacion-contenedor'>
        <img
          className='logoApp-logo'
          src={logoApp}
          alt='logo de la app'/>
      </div>
    </div>
  );
}

export default App;
