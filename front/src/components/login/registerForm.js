import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProgressLine from '../progressLine'
import UserContext from '../../context/UserContext'
import HttpContext from '../../context/HttpContext'

export default function RegisterForm() {
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
    document.addEventListener('openRegister',() => handleClickOpen ())
  }, [])

  const doRegister = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      user.setName('gustavo torregrosa 2')
      http.setJwt('jwt123456789 2')
      setLoading(false)
      handleClose()
      const event = new CustomEvent('rerender-all')
      document.dispatchEvent(event)
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
            id="name"
            label="Name"
            type="text"
            fullWidth
          />

          <TextField
            // autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          
        <TextField
            // autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />

        <TextField
            // autoFocus
            margin="dense"
            id="password-confirmation"
            label="Password confirmation"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button disabled onClick={ e => doRegister(e)} color="primary">
              Register
            </Button>
        </DialogActions>
            {loading ? <ProgressLine /> : null }
      
      </Dialog>
    </div>
  );
}
