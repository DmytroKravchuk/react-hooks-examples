import React, { useEffect, useState } from 'react';
import Main from './Main';
import Alert from './Alert';
import { AlertProvider } from './AlertContext';

function useLogger(value) {
  useEffect(() => {
    console.log(value)
  },[value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }
  const clear = () => setValue('')
  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')
  useLogger(input.value)
  useLogger(lastName.value)
  return (
      <div className='container pt-3'>
        <input type="text" {...input.bind}/>
        <input type="text" {...lastName.bind}/>
        <button className="btn btn-warning" onClick={() => {
          input.clear()
          lastName.clear()
        }}>Clear</button>
        <hr></hr>
        {input.value}
        {lastName.value}
      </div>
  );
}

export default App;
