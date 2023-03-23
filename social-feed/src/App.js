import React, {useState}from 'react';
import PostList from './Components/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css'

function App() {

const [posts, setPosts]= useState([])


function addNewPost(post){
  let tempPosts = [post, ...posts];

  setPosts(tempPosts)
}
  return (
    <div className="border-box">
      <h1 >
        <NavBar/>
      </h1>

      <div className="list-form">
        <CreatePostForm setPosts={setPosts} posts={posts} addNewPostProperty= {addNewPost}/>
      </div>

      <div className="post-list">
        <PostList parentPosts={posts} />

      </div>
       
    </div>
  );

  }
  
export default App;
