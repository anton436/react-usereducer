import React, { createContext, useReducer } from 'react';

export const counterContext = createContext();

const INIT_STATE = {
  counter: 0,
  inpVal: '',
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: action.payload };
    case 'DECREMENT':
      return { ...state, counter: action.payload };

    case 'INP_VALUE':
      return { ...state, inpVal: action.payload };

    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function increment() {
    dispatch({ type: 'INCREMENT', payload: state.counter + 1 });
  }

  function decrement() {
    dispatch({ type: 'DECREMENT', payload: state.counter - 1 });
  }

  function handleValue(e) {
    dispatch({ type: 'INP_VALUE', payload: e.target.value });
  }

  const values = {
    counter: state.counter,
    increment: increment,
    decrement,
    meder: state.inpVal,
    handleValue,
  };
  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
