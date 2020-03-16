import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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
  
  },
    }));

const NavBar = () => {
  const classes = useStyles();

    return(
      <div className={classes.navbarRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Front-End (React) test assessment by DevelopsToday
          </Typography>
        </Toolbar>
      </AppBar>
     </div>
    )
}

export default NavBar
    
 