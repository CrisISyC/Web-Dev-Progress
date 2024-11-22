import './App.css';
import logoApp from './images/codeblack_logo.png';
import Task from './components/Task';


function App() {
  return (
    <div className="App">
      <div className='logoAplicacion-container'>
        <img
          className='logoApp-logo'
          src={logoApp}
          alt='logo de la app'/>
      </div>  
      <div className='principalList'>
        <h1> Mis Tareas</h1>
        <Task text='Learn React'/>
      </div>
    </div>
  );
}

export default App;
