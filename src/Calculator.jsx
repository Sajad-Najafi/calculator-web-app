import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  let [result, setResult] = useState('');
  let [hasDot, setHasDot] = useState(false);
  const operatorKeys = ['+', '-', '*', '/'];

  const checkInput = input => {
    if (input === '÷') return '/';
    if (input === 'x') return '*';

    return input;
  };

  const clickHandler = e => {
    let input = checkInput(e.target.innerText);

    if (input === '.') {
      if (hasDot) return;
      else setHasDot(true);
    }

    if (operatorKeys.includes(input)) setHasDot(false);

    setResult(result.concat(input));
  };

  const clearAll = () => {
    setResult('');
    setHasDot(false);
  };

  const clearOne = () => {
    if (result.endsWith('.')) setHasDot(false);
    setResult(result.slice(0, -1));
  };

  const calculateResult = () => {
    setResult(String(eval(result)));
    setHasDot(false);
  };

  return (
    <div className='container'>
      <div className='screen'>{result}</div>
      <div className='buttons'>
        <button
          onClick={clearAll}
          className='color doubleWidth'
        >
          Clear
        </button>
        <button
          onClick={clearOne}
          className='color'
        >
          C
        </button>
        <button
          onClick={clickHandler}
          className='color'
        >
          ÷
        </button>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button
          onClick={clickHandler}
          className='color'
        >
          x
        </button>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button
          onClick={clickHandler}
          className='color'
        >
          -
        </button>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button
          onClick={clickHandler}
          className='color'
        >
          +
        </button>
        <button onClick={clickHandler}>0</button>
        <button onClick={clickHandler}>.</button>
        <button
          onClick={calculateResult}
          className='color doubleWidth'
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
