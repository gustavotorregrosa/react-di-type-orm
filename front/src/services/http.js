class Http {
    
    constructor(user){
        this.user = user
    }

    getJwt = () => this.user.getJwt()

    setJwt = jwt => this.user.setJwt(jwt) 
}

export default Http