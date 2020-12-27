import React, { useContext, useEffect } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import LogoutDialog from '../components/logoutDialog'
import ButtonAppBar from '../components/navBar'
import CarsPage from './cars'
import Button from '@material-ui/core/Button';
// import { withRouter } from 'react-router'

const Admin = props => {

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    // useEffect(() => {
    //     if(!user.getName()){
    //         props.history.push('/')
    //     }

    //     http.setProps(props)
    // }, [])

    const botaoTeste = async () => {
        let resposta = await http.doFetch({url: '/test/testfunction'})
        // resposta = await resposta.text()
        console.log("a resposta eh")
        console.log(resposta)
    }

    return(
        <div>
            <ButtonAppBar {...props}/>
            <Switch>
                <Route path="/admin/cars" exact component={CarsPage}/>
                
            </Switch>


            {/* <p>admin {http.getJwt()} - {user.getName()}</p> */}
            <LogoutDialog {...props} />
            {/* <Button onClick={() => botaoTeste() } variant="contained" color="primary">Primary</Button> */}
        </div>
    )
}


export default withRouter(Admin)