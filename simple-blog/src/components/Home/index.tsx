import React,{useEffect,useState} from "react"
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from "axios"

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
   navbarRoot: {
      flexGrow: 1,
    },
        menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    listRoot: {
    marginTop:15,  
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
     },
     cardRoot: {
    minWidth: 400,
    marginBottom:15,
  
  },
    }));

const Home = () => {
        const langActive = useSelector((state : any)=>state.langsReducer.langActive);
        console.log("langActive",langActive);
        const [allPosts, setAllPosts] = useState<any[]>([]);
        console.log("allPosts",allPosts);        
        
        useEffect(() => {
            console.log("Post_useEffect");
            axios.get('https://simple-blog-api.crew.red/posts').then( data => {
            console.log(data);
            const inputData = data;
            console.log("inputData",inputData);
            setAllPosts([...allPosts, ...inputData.data]);
            });
        //eslint-disable-next-line
        }, []);

        const history = useHistory();

         const handleClick = (itemId: number) => {
            history.push("/post/" + itemId);            
            console.log("itemId",itemId);
        }

  const classes = useStyles();
    
   return (
     <>
       <Container className={classes.listRoot} >        
       {allPosts.map(item => {
           return(
        <Card className={classes.cardRoot}>
         <CardContent>
            <List onClick = {() => handleClick(item.id)} component="nav" aria-label="main mailbox folders"> 
          <ListItem button >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={item.title}/>
          <Divider />
          <ListItemText primary={item.body}/>
          <ListItemText primary={item.id}/>
        </ListItem>        
      
      </List>
       </CardContent>
       </Card>
           )  
       })}  
    </Container>
    </>
  );
}

 

export default Home