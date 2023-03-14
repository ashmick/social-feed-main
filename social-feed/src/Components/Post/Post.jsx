// Within the Post component create a template of how you would like each individual
//  post to be displayed. This will include the user’s name, the body of the post, 
//  and the “like” and “dislike” buttons.

const addNewPost = (props) => {
    const [post, setPost]= usestate('');


function createNewPost (post) {
    // post.preventDefault();

    let newPost = {

    post: post
    };

    console.log (newPost);
    props.addnewPostProperty (newPost)
}

    return{
        <form onSubmit= {createNewPost}>
            <label> Name </label>     
            <input type= 'text' value= {post} onchange={(post)} => setPost (post.target.value))} />
        </form>
);
}

export default addNewPost;

