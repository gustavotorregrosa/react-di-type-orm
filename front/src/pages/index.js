import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'

const Index = props => {

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    useEffect(() => {
        user.recover()

        let url = '/login'
        if(user.getName()){
            url = '/admin'
        }
        
        props.history.push(url)
    }, [])

    return(
        <div>
            <p>teste aqui</p>
        </div>
    )
}


export default Index