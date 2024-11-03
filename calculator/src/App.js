import './App.css';
import logoApp from './images/codeblack_logo.png';
import Button from './components/Button'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const insertInput = value => {
    if (value === 'Clear'){
      setInput('')
    }else
      setInput(input + value);
  }

  const calculateResult = () => {
    if (input){
      setInput(evaluate(input));
    }else
      alert('Por favor ingrese valores validos para realizar los calculos')
    
  }

  return (
    <div className="App">
      <div className='logoAplicacion-container'>
          <img
            className='logoApp-logo'
            src={logoApp}
            alt='logo de la app'/>
      </div>  
      <div className='container-calculator'>
        <div className='screen'>
          <Screen 
          input={input}/>
        </div>
        <div className='row'>
          <Button handleClic={insertInput}>1</Button>
          <Button handleClic={insertInput}>2</Button>
          <Button handleClic={insertInput}>3</Button>
          <Button handleClic={insertInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClic={insertInput}>4</Button>
          <Button handleClic={insertInput}>5</Button>
          <Button handleClic={insertInput}>6</Button>
          <Button handleClic={insertInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClic={insertInput}>7</Button>
          <Button handleClic={insertInput}>8</Button>
          <Button handleClic={insertInput}>9</Button>
          <Button handleClic={insertInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={insertInput}>0</Button>
          <Button handleClic={insertInput}>.</Button>
          <Button handleClic={insertInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClic={insertInput}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
