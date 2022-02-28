import axios from "axios";
import Router, { useRouter } from "next/router";
import Swal from "sweetalert2";

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

export const getUserType = () =>{
    return(dispatch) =>{
        console.log("Bearer ");
        let token = "Bearer "+ localStorage.getItem('token');
        return new Promise ((resolve, reject) =>{
            axios
            .get("http://3.1.211.120:8081/users/jwt",{headers : {'Authorization':token }})
            .then(({data})=>{
                localStorage.setItem('is_renter', data.data.is_renter);
            })
            .catch((err)=>{
                Swal.fire("Somethings Off.. ", "We wil Fix It, Please Continue..", "info");
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