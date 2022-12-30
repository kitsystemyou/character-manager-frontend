import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
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
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function ButtonAppBar() {
  const [open, setopen] = useState(false);
  const toggleOpen=() => {
      setopen(!open);
  }
  const navigate = useNavigate()
  return (
    <div>
      <AppBar position="static" sx={{ color: "#020826", backgroundColor: "#f9f4ef" }}>
        <Toolbar spacing={1}>
          <IconButton edge="start" sx={{marginRight: (theme) => theme.spacing(2)}} onClick={toggleOpen} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" onClick={() => navigate('/')}>
            <Box>きゃらまね！</Box>
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button sx={{ color: "#020826", backgroundColor: "#f9f4ef" }} onClick={() => navigate('/create')}>
            <CreateIcon />
            新規作成
          </Button>
          <Button sx={{ color: "#020826", backgroundColor: "#f9f4ef" }} >
            <LibraryBooksIcon />
            その他のリンク
          </Button>
          <AccountCircleOutlinedIcon />
          <Box>アカウント名さん　</Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ marginRight: (theme) => theme.spacing(2),backgroundColor: "#f9f4ef"}} anchor='left' open={open} onClose={toggleOpen} >
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

