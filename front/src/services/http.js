class Http {
    
    constructor(user){
        this.user = user
    }

    apiUrl = 'http://localhost:4200'

    doFetch = async ({url, method, data}) => {

        const request = this.generateRequestObject(url, method, data)
        let response = await fetch(request)
        response = await response.json()
        return response

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