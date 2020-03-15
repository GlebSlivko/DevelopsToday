import React,{useEffect} from "react"
import axios from "axios"

const Post = () => { 

useEffect(() => {
    console.log("Post_useEffect");
    axios.get('https://simple-blog-api.crew.red/posts/1?_embed=comments').then(data => {
    console.log(data);
    });
  });  

    return(
        <>
        <div>PostComponentText</div>
        </>
    )
}

export default Post