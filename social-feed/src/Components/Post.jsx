import React, { useState } from 'react';

const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    function likeButton() {
    setIsLiked(!isLiked);
    }

    function dislikeButton(){
        setIsDisliked(!isDisliked);
    }

    return(
        <li>    
            {console.log("post")}
            <p className="list-name">{props.post.name}</p>
            <p>{props.post.message} </p>
            <button className={"terenary operator"} onClick={(event) => likeButton()}>
                Like
            </button>
            <button onClick={(event) => dislikeButton()}>
                Dislike
            </button>
        </li>
    // add another component for the ul 
    );

};

export default Post;

