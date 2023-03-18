import React, {useState}from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';

function App() {

const [posts, setPosts]= useState([{name: 'Ashley', message: 'I love to code'},{name:'Amy' , message : 'here to code now'}])


function addNewPost(post){
  let tempPosts = [post, ...posts];

  setPosts(tempPosts)
}
  return (
    <div >

        <NavBar/>
        <CreatePostForm setPosts={setPosts} posts={posts} addNewPostProperty= {addNewPost}/>
        <Post parentPosts={posts} />

    </div>
  );

  }
  
export default App;
