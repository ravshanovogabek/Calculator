import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const val = e.target.value;
    if (val === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
    } else {
      setValue(value + val);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={value} readOnly />
        </div>
        <div className="buttons">
          <input type="button" value="AC" className="span-two" onClick={() => setValue('')} />
          <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
          <input type="button" value="/" className="operator" onClick={handleButtonClick} />
          <input type="button" value="7" onClick={handleButtonClick} />
          <input type="button" value="8" onClick={handleButtonClick} />
          <input type="button" value="9" onClick={handleButtonClick} />
          <input type="button" value="*" className="operator" onClick={handleButtonClick} />
          <input type="button" value="4" onClick={handleButtonClick} />
          <input type="button" value="5" onClick={handleButtonClick} />
          <input type="button" value="6" onClick={handleButtonClick} />
          <input type="button" value="-" className="operator" onClick={handleButtonClick} />
          <input type="button" value="1" onClick={handleButtonClick} />
          <input type="button" value="2" onClick={handleButtonClick} />
          <input type="button" value="3" onClick={handleButtonClick} />
          <input type="button" value="+" className="operator" onClick={handleButtonClick} />
          <input type="button" value="00" onClick={handleButtonClick} />
          <input type="button" value="0" onClick={handleButtonClick} />
          <input type="button" value="." onClick={handleButtonClick} />
          <input type="button" value="=" className="span-two operator" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
