import React, {useState}from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
function App() {

const [post, setPosts]= useState()

  return (
    <div >

        {/* <NavBar/> */}
        <CreatePostForm setPosts={setPosts}/>
        <Post parentPosts= {post}/>
    </div>
  );
}

export default App;
