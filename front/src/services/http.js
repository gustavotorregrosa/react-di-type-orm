class Http {
    
    constructor(user){
        this.user = user
        this.props = null
    }

    setProps = props => this.props = props

    apiUrl = 'http://localhost:4200'

    _logUserOut = () => {
        let event = new CustomEvent('popMessage', {
            detail: {
              message: 'User expired'
            }
          })
          document.dispatchEvent(event)
          this.user.logout()
          this.props.history.push('/')
    }

    doFetch = async ({url, method, data}) => {

        let request = this.generateRequestObject(url, method, data)
        let response = await fetch(request)
        let status = response.status

        if(status == 401){
            this._logUserOut()
            return
        }

        if(status == 403){
            
        }

        response = await response.json()
        return response

    }


    _renewUser = () => {
        return new Promise((success, reject) => {
            const params = {
                url: '/user/refresh',
                method: 'post',
                data: {
                  email: this.user.getEmail(),
                  password: this.user.getRefreshToken()
                }
            }
            let request = this.generateRequestObject('/', method, data)
        })
    }



    generateRequestObject = (url, method = 'get', data = {}) => {

        let reqJsonObj = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'jwt': this.user.getJwt()
            }
        }

        if(method == 'post'){
            reqJsonObj = {
                ...reqJsonObj,
                body: JSON.stringify({
                    ...data
                }),
            }
        }

        const request = new Request(this.apiUrl + url, reqJsonObj)
        return request
    }

    getJwt = () => this.user.getJwt()

    setJwt = jwt => this.user.setJwt(jwt) 
}

export default Http