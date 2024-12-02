import './App.css';
import UseStateHook from './components/UseStateHook';

function App() {



  return (
    <div className="App">
      <div id="Interno1">
        1
      </div>
      <div id="Interno2">
        2
      </div>
      <div id="Interno3">
        3
      </div>
      <div id="Interno4">
        4
      </div>
      <div id="Interno5">
        <UseStateHook 
          valueInput ="Suave que estoy aprendiendo"/>
      </div>
      <div id="Interno6">
        6
      </div>
    </div>
  );
}

export default App;
