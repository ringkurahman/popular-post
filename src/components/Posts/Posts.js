import React, { useState, useEffect } from 'react';
import './Posts.css';
import Post from '../Post/Post';
import Header from '../Header/Header';

const Posts = () => {
  // Post State
  const [posts, setPosts] = useState([]);

  // Pull posts from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className='main-container'>
        <div className='left-container'></div>
        <div className='posts-container'>
          {posts.map((pt) => (
            <Post post={pt} key={pt.id}></Post>
          ))}
        </div>
        <div className='right-container'></div>
      </div>
    </div>
  );
};

export default Posts;
