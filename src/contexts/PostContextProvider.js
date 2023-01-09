import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const postContext = createContext();

const API = 'https://rickandmortyapi.com/api/character';

const INIT_STATE = {
  posts: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPosts() {
    const res = await axios(API);

    dispatch({
      type: 'GET_POSTS',
      payload: res.data.results,
    });
  }

  const values = { posts: state.posts, getPosts };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
