import React, {useState}from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import './Components/Post/Post.css'

function App() {

const [posts, setPosts]= useState([])


function addNewPost(post){
  let tempPosts = [post, ...posts];

  setPosts(tempPosts)
}
  return (
    <div class="border-box">
      <h1 >
        <NavBar/>
      </h1>

      <div className="list-form">
        <CreatePostForm setPosts={setPosts} posts={posts} addNewPostProperty= {addNewPost}/>
      </div>

      <div className="post-list">
        <Post parentPosts={posts} />

      </div>
       
    </div>
  );

  }
  
export default App;
