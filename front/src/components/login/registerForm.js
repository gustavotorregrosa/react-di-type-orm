import React, {useContext, useEffect, createRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProgressLine from '../progressLine'
import UserContext from '../../context/UserContext'
import HttpContext from '../../context/HttpContext'


const RegisterForm = props => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let emailInput, 
      passwordInput, 
      nameInput, 
      passwordConfirmationlInput

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

  const doRegister = async e => {
    e.preventDefault()
    
    let event
    if(passwordInput.value != passwordConfirmationlInput.value){
      event = new CustomEvent('popMessage', {
        detail: {
          message: 'Passwords dont match'
        }
      })
      document.dispatchEvent(event)

      return
    }

    setLoading(true)
    const params = {
      url: '/user/create',
      method: 'post',
      data: {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      }
    }
    try{
      let userData = await http.doFetch(params)
      await user.login(userData)
      setLoading(false)
      handleClose()
      event = new CustomEvent('rerender-all')
      document.dispatchEvent(event)
      event = new CustomEvent('popMessage', {
        detail: {
          message: 'User registered'
        }
      })
      document.dispatchEvent(event)
      props.history.push('/')

    }catch(e){
      console.log(e)
    }

  }

  return (
    <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
            <TextField
            // autoFocus
            inputRef={field => nameInput = field}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />

          <TextField
            // autoFocus
            inputRef={field => emailInput = field}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          
        <TextField
            // autoFocus
            inputRef={field => passwordInput = field}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />

        <TextField
            // autoFocus
            inputRef={field => passwordConfirmationlInput = field}
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
            <Button onClick={ e => doRegister(e)} color="primary">
              Register
            </Button>
        </DialogActions>
            {loading ? <ProgressLine /> : null }
      
      </Dialog>
    </div>
  );
}

export default RegisterForm

