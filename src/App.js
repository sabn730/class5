import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext.js';

function App() {
  let countState = useState(1)
  //let [count,SetCount] = useState(50)
  return (
    
    <counterContext.Provider value={countState}>
      <div >
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
