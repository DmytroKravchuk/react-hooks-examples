import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while(i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number);
  },[number]);

  const styles = useMemo(() => (
    {
      color: colored ? 'darkred': 'black'
    }
  ),[colored])

  useEffect(() => {
    console.log('styles changes');
  },[styles])

  return (
    <div className="App">
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;
