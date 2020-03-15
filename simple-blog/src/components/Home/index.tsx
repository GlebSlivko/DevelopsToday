import React,{useEffect,useState} from "react"
import axios from "axios"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
     },
    }));

const Home = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
    console.log("Post_useEffect");
    axios.get('https://simple-blog-api.crew.red/posts').then(data => {
    console.log(data);
    const inputData = data;
    console.log("inputData",inputData);
    setAllPosts([...allPosts, ...inputData]);
    });
    
  }, [allPosts]); 

  const classes = useStyles();
    
   return (

    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>        
      <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>        
      </List>
  
    </div>
  );
}

export default Home