import React, {useState} from 'react';

function computeInitialCounter() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [state, setState] = useState({
    title: 'counter',
    date: Date.now()
  });

  function increment() {
    setCounter(counter + 1);
    setCounter(prev => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
    setCounter(prev => prev - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "New Title"
      }
    })
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>Add</button>
      <button className="btn btn-danger" onClick={decrement}>Remove</button>
      <button className="btn btn-default" onClick={updateTitle}>Change title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
