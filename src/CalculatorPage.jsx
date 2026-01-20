import React, { useState } from 'react';
import './styles.css';

function CalculatorPage() {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNext, setWaitingForNext] = useState(false);

  const handleDigitClick = (digit) => {
    if (displayValue === '0' || waitingForNext) {
      setDisplayValue(digit);
      setWaitingForNext(false);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      handleEquals();
    }
    setPrevValue(parseFloat(displayValue));
    setOperator(op);
    setWaitingForNext(true);
  };

  const handleEquals = () => {
    if (!operator) return;
    const currentValue = parseFloat(displayValue);
    let result;
    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setPrevValue(result);
    setOperator(null);
    setWaitingForNext(true);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForNext(false);
  };

  return (
    <div className="container calculator">
      <h2>Calculator</h2>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleDigitClick('.')}>.</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
}

export default CalculatorPage;
