import React, {Component} from 'react';

class User extends Component {

    state = {
        name: "",
        email: "",
        jwt: "",
        refreshToken: ""
    }

    logout = () => {
        this.state = {
            name: "",
            email: "",
            jwt: "",
            refreshToken: ""
        }

        localStorage.removeItem('user')
    }

    login = user => {
        return new Promise((success, reject) => {
                this.state = {...user}
                localStorage.setItem('user', JSON.stringify(this.state))
                setTimeout(() => {
                    success(true)
                }, 1000)
        })

    }

    recover = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        this.state = {...user} 
    }

    getEmail = () => this.state.email

    getName = () => this.state.name

    getRefreshToken = () => this.state.refreshToken

    setName = name => {
        this.state = {
            ...this.state,
            name
        }
    }

    getJwt = () => this.state.jwt

    setJwt = jwt => {
        this.state = {
            ...this.state,
            jwt
        }
    }

    setUser = user => {
        this.state = {...user}
    }

}

export default User