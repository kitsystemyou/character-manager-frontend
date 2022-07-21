import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import CreateIcon from '@material-ui/icons/Create';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar:{
    color: "#020826", 
    backgroundColor: "#f9f4ef"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleOpen} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Box textAlign="left">きゃらまね！</Box>
          </Typography>
          <Button onClick={() => navigate('/create')} textAlign="right" >
            <CreateIcon />
            新規作成
          </Button>
          <Button textAlign="right">
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
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="シート一覧" />
                </ListItemButton>
            </ListItem>            
            <ListItem disablePadding>
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

