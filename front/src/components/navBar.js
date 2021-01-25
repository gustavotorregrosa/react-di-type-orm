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

const ButtonAppBar = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLogoutDialog = e => {
    e.preventDefault()
    const event = new CustomEvent('openLogout')
	  document.dispatchEvent(event)
  }

  const goTo = (e, url) => {
    e.preventDefault()
    console.log(props)
    props.history.push(url)
  } 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit" onClick={e => goTo(e, '/admin/cars')}>Cars</Button>
          <Button color="inherit" onClick={e => openLogoutDialog(e)}>Logout</Button>
        </Toolbar>
          <Menu id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <MenuItem color="inherit" onClick={e => goTo(e, '/admin/cars')}>Cars</MenuItem>
          <MenuItem onClick={e => openLogoutDialog(e)} >Logout</MenuItem>
        </Menu>
      
      </AppBar>
    </div>
  );
}

export default ButtonAppBar