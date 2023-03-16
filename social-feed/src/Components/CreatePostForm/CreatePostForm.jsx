import React, {useState} from 'react';

const CreatePostForm = (props) => {
    
    function addNewPost (event) {
        event.preventDefault();
        let newPost= {
            post: post,
        };

        console.log(newPost);
        props.addNewPostProperty(newPost)

    }

return(
    <form onSubmit={addNewPost}>
        <label> Name </label>     
        <input type= 'text' value= {post} onchange={(event)=> setPost(event.target.value)} />
    </form>
);
}

export default CreatePostForm;