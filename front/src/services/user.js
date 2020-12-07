import React, {Component} from 'react';

class User extends Component {

    state = {
        name: "",
        email: "",
        jwt: ""
    }

    logout = () => {
        this.state = {
            name: "",
            email: "",
            jwt: ""
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
        console.log(user)
        this.state = {...user} 
    }

    getName = () => this.state.name

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