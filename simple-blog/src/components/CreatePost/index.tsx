import React,{useEffect} from "react"
import axios from "axios"

const CreatePost = () => {
    useEffect(()=> {
    console.log("useEffectInCreatePost");
    axios.post('https://simple-blog-api.crew.red/posts', {
     headers: {
          "Content-Type": "testHeader",
        },
        data: {
        "title": "In quibusdam tempore odit est dolorem",
	    "body": "Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio"
        }    
     })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
    })    
    
    return(
        <>
        <div>CreatePostComponentText</div>
        </>
    )
}

export default CreatePost