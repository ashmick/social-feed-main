import React, { useState } from 'react';


const Post = (props) => {
const [name, setName]= useState('')
const [message, setMessage]= useState ('')


function addPostToList (event){

    let newList = []

return (
    <ul>
        <label> Feed </label>
        <li> Post 1</li>
        <li>Post 2 </li>
        <li>Post 3 </li>
    </ul>


);
}
}

export default Post;