import React,{useEffect,useState,SyntheticEvent} from "react"
import axios from "axios"

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const CreatePost = () => {

    const [state,setState] = useState({
        email: '',
    })
 
    const handleChange = (event: SyntheticEvent) => {
        console.log("event",event); 
        // const email = event.target.value;
        // setState({ email });
    }
 
    const handleSubmit = () => {
        // your submit logic
    }
      

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
    const { email } = state;
        
   return (

            <ValidatorForm
                // ref="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
}

export default CreatePost