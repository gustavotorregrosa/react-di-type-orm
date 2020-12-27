import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
import PageLogin from './pages/login'
import Index from './pages/index'
import Admin from './pages/admin'
import UserContext from './context/UserContext'
import HttpContext from './context/HttpContext'
import UserService from './services/user'
import myHttpService from './services/http'
import CustomSnackbar from './components/customSnackbar';

let userService = new UserService
let httpService = new myHttpService(userService) 

class App extends React.Component{

  componentDidMount = () => {
    document.addEventListener('rerender-all', () => this.forceUpdate())
  }

  routes = (
    <HttpContext.Provider value={httpService}>
      <UserContext.Provider value={userService}>
        <Switch>
          <Route path="/admin"  component={Admin}/>
          <Route path="/login"  component={PageLogin}/>
          <Route path="/*" component={Index}/>
        </Switch>
        <CustomSnackbar />
      </UserContext.Provider>
    </HttpContext.Provider>
  )

  render(){
    return this.routes
  }

}

export default withRouter(App);
