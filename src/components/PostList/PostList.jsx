import React, { useContext, useEffect } from 'react';
import { postContext } from '../../contexts/PostContextProvider';
import PaginationControlled from '../Pagination/Pagination';
import Post from '../Post/Post';

import './PostList.css';

const PostList = () => {
  const { getPosts, posts } = useContext(postContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='posts-list'>
      {posts?.map((item) => (
        <Post {...item} key={item.id} />
      ))}
      <PaginationControlled />
    </div>
  );
};

export default PostList;
