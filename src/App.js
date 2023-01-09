import React from 'react';
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import PostList from './components/PostList/PostList';

const App = () => {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
};

export default App;
