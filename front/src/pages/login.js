import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import ButtonAppBar from '../components/login/navBar'
import LoginForm from '../components/login/loginForm'
import RegisterForm from '../components/login/registerForm'
import useForceUpdate from 'use-force-update';

const PageLogin = props => {

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    const forceUpdate = useForceUpdate()

    useEffect(() => {
        document.addEventListener('rerender-all', () => forceUpdate())
        
        if(user.getName()){
            props.history.push('/')
        }
    }, [])

    return(
        <div>
            <ButtonAppBar />
            <LoginForm {...props} />
            <RegisterForm {...props}/>
        </div>
        )

}

export default PageLogin