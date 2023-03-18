import React, {useState} from 'react';

const Post = (props) => { 

        return(
            <div>
                {props.parentPosts.map((post, index) =>{
                return(
                    <ul>  
                            <li>{post.name}</li>
                            <li>{post.message} </li>
                    </ul>
                );
              } 
                )} 
            </div>
        )}
    export default Post;