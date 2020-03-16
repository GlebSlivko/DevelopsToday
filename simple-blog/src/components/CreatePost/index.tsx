import React,{useEffect,useState,useCallback} from "react"
import {useDispatch} from 'react-redux';
import { formDataToStore} from "../../redux/actions/langsActions";
import axios from "axios"

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const CreatePost = () => {

    const [state,setState] = useState({
        header : '',
    })
    console.log(state); 
    const dispatch = useDispatch();    

    const loadLangs = useCallback(
        () => { dispatch(formDataToStore(state.header)) },
        [dispatch, state]
    );       
    
    const handleChange = (event: any) => {
        console.log("event",event); 
        const header = event.target.value;
        console.log(header);
        setState({ header });       
    }
 
    const handleSubmit = () => {
        loadLangs()
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
    const { header } = state;
        
   return (

            <ValidatorForm
                // ref="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Header"
                    onChange={(event) => handleChange(event)}
                    name="header"
                    value={header}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                {/* <TextValidator
                    label="Body"
                    onChange={(event) => handleChange(event)}
                    name="body"
                    value={body}
                    validators={['required']}
                    errorMessages={['this field is required']}
                /> */}
                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
}

export default CreatePost