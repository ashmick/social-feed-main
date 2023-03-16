import React, {useState} from 'react';


// Within the Post component create a template of how you would like each individual
//  post to be displayed. This will include the user’s name, the body of the post, 
//  and the “like” and “dislike” buttons.

const Post = (props) => {
    const [post, setPost]= useState('');


function createNewPost (post) {
    post.preventDefault();
    let newPost = {
    post: post
    };

    console.log (newPost);
    props.addnewPostProperty (newPost)
}

}

export default Post;

