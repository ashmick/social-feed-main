import React, {useState} from 'react';

const CreatePostForm = (props) => {
const [name, setName]= useState('')
const [message, setMessage]= useState('')



    function addNewPost (event) {
        event.preventDefault();
        let newPost= {
            name: name,
            message:message
        };

        console.log(newPost);
        addToList(newPost)

    }

    function addToList (newPost){

        let tempPosts= [...props.posts, newPost]
        console.log(tempPosts)
    }

return(
    <form onSubmit={addNewPost}>
        <label> Name </label>     
        <input type= 'text' value= {name} onChange={(event)=> setName(event.target.value)} />
        <label> Message </label>     
        <input type= 'text' value= {message} onChange={(event)=> setMessage(event.target.value)} />
        <button type= 'submit'>press here</button>
    </form>
);
}

export default CreatePostForm;