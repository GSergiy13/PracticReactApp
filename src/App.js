import './index.css';

import React, {useState} from 'react';

function App() {
  const [caount, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{caount}</h1>
        <button onClick={() => setCount(caount - 1)} className="minus">- Минус</button>
        <button onClick={() => setCount(caount + 1)}  className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
