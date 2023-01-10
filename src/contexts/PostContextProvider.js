import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

export const postContext = createContext();

const API = 'https://rickandmortyapi.com/api/character';

const INIT_STATE = {
  posts: [],
  page: 1,
  totalPages: 1,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, posts: action.payload };

    case 'CURRENT_PAGE':
      return { ...state, page: action.payload };

    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };

    default:
      return state;
  }
}

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPosts() {
    const res = await axios(`${API}?page=${state.page}`);

    dispatch({
      type: 'GET_POSTS',
      payload: res.data.results,
    });

    dispatch({
      type: 'SET_TOTAL_PAGES',
      payload: res.data.info.pages,
    });
  }

  useEffect(() => {
    getPosts();
  }, [state.page]);

  function setPage(page) {
    dispatch({ type: 'CURRENT_PAGE', payload: page });
  }

  const values = {
    posts: state.posts,
    getPosts,

    setPage,
    page: state.page,
    totalPages: state.totalPages,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
