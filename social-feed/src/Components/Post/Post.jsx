import React, {useState} from 'react';

const Post = (props) => { 

        return(
            <div>
                {props.parentPosts.map((post, index) =>{
                return(
                    <ul className="border-box">  
                            <li className="list-name">{post.name}</li>
                            <li>{post.message} </li>
                    </ul>
                );
              } 
                )} 
            </div>
        )}
    export default Post;