import React,{useState,useEffect} from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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

   return ( 
       <div>
       {post.map(item => {
           return (
           <Card className={classes.root}>
             <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {item.title}
               </Typography>            
               <Typography className={classes.pos} color="textSecondary">
                   {item.body}
               </Typography>       
             </CardContent>
             <CardActions>
               <Button size="small">Learn More</Button>
             </CardActions>
           </Card>               
           )
       })} 
       </div>           
  );
}

export default Post




