import React,{useEffect,useState,useCallback} from "react"
import {useDispatch} from 'react-redux';
import { formDataToStore} from "../../redux/actions/langsActions";
import axios from "axios"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const CreatePost = () => {

    const useStyles = makeStyles({
     cardRoot: {
     maxWidth: 275,
        marginLeft:"auto",
        marginRight:"auto",
     },
     bullet: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(0.8)',
     },
     title: {
    fontSize: 14,
     },
     button: {
        marginTop:25,
        marginLeft:"auto",
        marginRight:"auto",
         fontSize: 14,
     },
    pos: {
      marginBottom: 12,
      },
    })

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
        
    const classes = useStyles(); 

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
       <>
       <Card className={classes.cardRoot} variant="outlined" >
        <CardContent >           
            <ValidatorForm
                // ref="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <TextValidator
                    label="Header"
                    onChange={(event) => handleChange(event)}
                    name="header"
                    value={header}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                </Typography>
                 <TextValidator
                    label="Header"
                    onChange={(event) => handleChange(event)}
                    name="header"
                    value={header}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Typography className={classes.button} color="textSecondary" gutterBottom>
                <Button type="submit">Submit</Button>
                </Typography>
            </ValidatorForm>
            </CardContent>
            </Card>
            </>
        );
}

export default CreatePost