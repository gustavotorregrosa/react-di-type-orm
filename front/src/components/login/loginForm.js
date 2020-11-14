import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProgressLine from '../progressLine'
import UserContext from '../../context/UserContext'
import HttpContext from '../../context/HttpContext'

const LoginForm = props => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const http = useContext(HttpContext)
  const user = useContext(UserContext)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('openLogin',() => handleClickOpen ())
  }, [])

  const doLogin = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      user.login({
        name: "gustavo torregrosa",
        email: "gustavo.torregrosa@gmail.com",
        jwt: "jwt123456789"
      })
      setLoading(false)
      handleClose()
      const event = new CustomEvent('rerender-all')
      document.dispatchEvent(event)
      props.history.push('/')
    }, 3000)
    
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            // autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          
        <TextField
            style={{
                marginTop: '2em'
            }}
            // autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={ e => doLogin(e)} color="primary">
              Login
            </Button>
        </DialogActions>
            {loading ? <ProgressLine /> : null }
      
      </Dialog>
    </div>
  );
}

export default LoginForm