import React, { useContext } from 'react';
import { counterContext } from '../../contexts/CounterContextProvider';

const Counter = () => {
  const { counter, increment, decrement, meder, handleValue } =
    useContext(counterContext);

  return (
    <div>
      <div align='center'>
        <h1>{counter}</h1>
        <button onClick={decrement}>MINUS</button>
        <button onClick={increment}>PLUS</button>
      </div>

      <div>
        <h2>{meder}</h2>
        <input onChange={handleValue} type='text' />
      </div>
    </div>
  );
};

export default Counter;
