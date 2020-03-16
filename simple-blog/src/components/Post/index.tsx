import React,{useState,useEffect} from "react"
import axios from "axios"
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 500,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },

// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
     root: {
    maxWidth: 500,
    borderRadius:"10px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    fontWeight:"bold"
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:"10px",
      
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth:400,
      borderRadius:"10px",
    },
    button:{
      marginLeft:"70%",      
    }
  }),
);

const Post = () => { 
    const [post, setPost] = useState<any[]>([]);
    const classes = useStyles();

useEffect(() => {
    axios.get('https://simple-blog-api.crew.red/posts/1?_embed=comments').then(data => {
    const inputData = data;
    console.log("data",inputData);
    setPost([inputData.data]);
    });

    // eslint-disable-next-line
  },[]);  

   const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const history = useHistory();

  const handleClose = () => {
    history.push("/");  
    setOpen(false);
  };

   return ( 
       <Container>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container className={classes.paper}>
                 {post.map(item => {
           return (
             <>           
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {item.title}
               </Typography> 
               <Divider />           
               <Typography className={classes.pos} color="textSecondary">
                   {item.body}
               </Typography>  
               <Typography className={classes.button} color="textSecondary">
                   <Button onClick={handleClose} color="primary" >ok</Button>
               </Typography>  
          </>              
           )
       })} 
          </Container>
        </Fade>
      </Modal>
       </Container>
   
  
  );
}

export default Post




