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
import InfiniteScroll from 'react-infinite-scroll-component';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import DraftsIcon from '@material-ui/icons/Drafts';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    titleTypography: {
    fontSize: 16,
    fontWeight:"bold"
  },
    bodyTypography: {
    fontSize: 14,    
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
    mainContainer: {    
    marginTop:15,
  },
    number: {    
    marginLeft:"100%",
  },
    box: {    
    marginRight:"5%",
  },
    }));

const Home = () => {
    const langActive = useSelector((state : any)=>state.langsReducer.langActive);
    console.log("langActive",langActive);
    const [allPosts, setAllPosts] = useState<any[]>([]);
    console.log("allPosts",allPosts);
    const [posts, setPosts] = useState<any[]>([]);
    const [postsQuantity, setPostsQuantity] = useState<number>(0);

    useEffect(() => {
        console.log("Post_useEffect");
        axios.get('https://simple-blog-api.crew.red/posts').then( data => {
        console.log(data);
        const inputData = data;
        console.log("inputData",inputData);
        setAllPosts([...allPosts, ...inputData.data]);
        });
        // loadMoreProducts()
    //eslint-disable-next-line
    }, []);

    useEffect(() => {
        loadMoreProducts();
        //eslint-disable-next-line
    },[allPosts]);

        //eslint-disable-next-line
        const loadMoreProducts = ()=>{
         setTimeout(function () {
        const totalPostCpunt = allPosts.length;
        if(allPosts.length < 1) return;
        const step = 6;
        let addPosts = [];
        let i = postsQuantity;
        console.log("i",i)
        for (i; i<= postsQuantity+step; i++){
            if(i<=totalPostCpunt){
                addPosts.push(allPosts[i]);
                console.log("allPosts[i]",allPosts[i])
            }

        }
        setPosts([...posts, ...addPosts]);
        setPostsQuantity(i);
    }, 1500);

};
    const history = useHistory();

     const handleClick = (itemId: number) => {
        history.push("/post/" + itemId);
        console.log("itemId",itemId);
    }

    const classes = useStyles();
    const postList = (allPosts: any[])=> {
     return(
         <Container className={classes.mainContainer}>
         {allPosts.map(item => (
             <Card className={classes.cardRoot} onClick = {() => handleClick(item.id)}>
                 <CardContent>
                             <Typography className={classes.titleTypography}>
                             {item.title}
                             <Divider />
                             </Typography>
                             <Typography className={classes.bodyTypography}>
                             {item.body}
                             <Box className={classes.box}>
                             <span className={classes.number}> {item.id}</span>
                             </Box>
                             </Typography>
                                                    
                 </CardContent>
             </Card>
         ))}
         </Container>
         )
    };
    return (
     <InfiniteScroll
         dataLength={posts.length}
         next={loadMoreProducts}
         hasMore={postsQuantity < allPosts.length}
         loader='Загрузка'
     >
         {postList(posts)}

     </InfiniteScroll>
  );
}



export default Home