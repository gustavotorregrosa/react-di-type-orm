import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProgressLine from './progressLine'
import UserContext from '../context/UserContext'

const LogoutDialog = props => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const user = useContext(UserContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('openLogout',() => handleClickOpen ())
  }, [])

  const doLogout= e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      user.logout()
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
          {user.getName()}

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={ e => doLogout(e)} color="primary">
              Logout
            </Button>
        </DialogActions>
            {loading ? <ProgressLine /> : null }
      
      </Dialog>
    </div>
  );
}

export default LogoutDialog