import axios from "axios";

export const submitRegister = (input) =>{
    return() => {
        return new Promise((resolve, reject) =>{
            axios
                .post("http://3.1.211.120:8081/users",input)
                .then(({data}) =>{
                    resolve(data,"Resolve data")
                })
                .catch(({response})=>{
                    const data = response.data.message
                    reject(data)
                })
        })
    }
}

export const submitLogin = (input) =>{
    return(dispatch) => {
        return new Promise((resolve, reject) =>{
            axios
                .post("http://3.1.211.120:8081/login",input)
                .then(({data}) =>{
                    localStorage.setItem("token", data.data)
                    // dispatch(setUser(data))
                    resolve(data,"Resolve data")
                })
                .catch(({response})=>{
                    const data = response.data.message
                    reject(data)
                })
        })
    }
}

export const setUser = (payload) => {
    return {
        type : "set-user",
        payload,
    }
}