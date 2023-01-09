import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CounterContextProvider from './contexts/CounterContextProvider';
import PostContextProvider from './contexts/PostContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostContextProvider>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </PostContextProvider>
);
