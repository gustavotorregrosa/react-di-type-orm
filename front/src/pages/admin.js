import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import LogoutDialog from '../components/logoutDialog'
import ButtonAppBar from '../components/navBar'
import Button from '@material-ui/core/Button';

const Admin = props => {

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    useEffect(() => {
        if(!user.getName()){
            props.history.push('/')
        }
    }, [])

    return(
        <div>
            <ButtonAppBar />
            <p>admin {http.getJwt()} - {user.getName()}</p>
            <LogoutDialog {...props} />
            <Button variant="contained" color="primary">Primary</Button>
        </div>
    )
}


export default Admin