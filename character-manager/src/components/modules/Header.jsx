import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/material/styles/';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const useStyles = makeStyles((theme) => ({
  appBar:{
    color: "#020826", 
    backgroundColor: "#f9f4ef"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },  
  drawerPaper: {
    marginRight: theme.spacing(2),
    backgroundColor: "#f9f4ef"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const toggleOpen=() => {
      setopen(!open);
  }
  const navigate = useNavigate()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar spacing={1}>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleOpen} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={() => navigate('/')}>
            <Box textAlign="left">きゃらまね！</Box>
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button onClick={() => navigate('/create')} textalign="right" >
            <CreateIcon />
            新規作成
          </Button>
          <Button textalign="right">
            <LibraryBooksIcon />
            その他のリンク
          </Button>
          <AccountCircleOutlinedIcon />
          <Box textAlign="right">アカウント名さん　</Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer classes={{paper:classes.drawerPaper,}} anchor='left' open={open} onClose={toggleOpen} >
      <Toolbar />
          <List>
            <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="シート一覧" />
                </ListItemButton>
            </ListItem>            
            <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="アカウント" />
                </ListItemButton>
            </ListItem>
          </List>
      </Drawer>
    </div>
  );
}

