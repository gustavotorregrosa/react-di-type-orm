import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLoginForm = e => {
    e.preventDefault()
    const event = new CustomEvent('openLogin')
	  document.dispatchEvent(event)
  }

  const openRegisterForm = e => {
    e.preventDefault()
    const event = new CustomEvent('openRegister')
	  document.dispatchEvent(event)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Reciepes
          </Typography>
          <Button color="inherit" onClick={e => openRegisterForm(e)}>Register</Button>
          <Button onClick={e => openLoginForm(e)} color="inherit">Login</Button>
        </Toolbar>
          <Menu id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <MenuItem onClick={e => openRegisterForm(e)}>Register</MenuItem>
          <MenuItem onClick={e => openLoginForm(e)} >Login</MenuItem>
        </Menu>
      
      </AppBar>
    </div>
  );
}
