import React, {useContext, useEffect, forwardRef, useRef, useImperativeHandle} from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const CustomSnackbar = () => 

{
    const [show, setShow] = React.useState(false)
    const [message, setMessage] = React.useState('')

    const showMessage = message => {
        setShow(true)
        setMessage(message)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    useEffect(() => {
       
        document.addEventListener('popMessage', e => {
            showMessage(e.detail.message)
        })
    }, [])

    return(
        <Snackbar
            open={show}
            message={message}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
      />)
}

export default CustomSnackbar