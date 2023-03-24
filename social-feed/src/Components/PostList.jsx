import React, {useState} from 'react';
import Post from "./Post";


const PostList = (props) => { 

        return(
            <div>
                <h1>
                    Post Feed
                </h1>
                <ul className="border-box">
                {props.parentPosts.map((post, index) =>{
                    {console.log(post, "post list")}
                    return <Post post={post} />
              }
                )}
                </ul>
            </div>
        )};
    export default PostList;


