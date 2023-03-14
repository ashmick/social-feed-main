import React, {useState}f= from 'react';
import Post from './Components/Post/Post';

function App() {

const [post, setPosts]= useState()

  return (
    <div className="App">
      <header className="App-header">
        <Post parentPosts= {Post}/>
      </header>
    </div>
  );
}

export default App;
