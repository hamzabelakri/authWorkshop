import axios from "axios";
import { SIGN_IN ,USER_FAIL,LOG_OUT,REGISTER,GET_USER} from "../Types";
export const login=(useInfo,nav)=>async(dispatch)=>{
    try {
        const response=await axios.post("http://localhost:2000/auth/sign-in",useInfo)
        dispatch({type:SIGN_IN,payload:{user:response.data.user,token:response.data.token}})
        nav('/profile')
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map((err) => alert(err.msg));
        
    }
}
export const register=(useInfo,nav)=>async(dispatch)=>{
    console.log(useInfo)
    try {
        const response=await axios.post("http://localhost:2000/auth/sign-up",useInfo)
        dispatch({type:REGISTER,payload:{user:response.data.user,token:response.data.token}})
        nav('/profile')
        
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map((err) => alert(err.msg));
    }
}
export const logOut=(nav)=>{
  nav('/');
  return {type:LOG_OUT}

}
export const getUser=()=>async(dispatch)=>{
    
    try {
        const config={headers:{
            token:localStorage.getItem('token')
        }}
        
        const response=await axios.get('http://localhost:2000/auth/me',config)
        dispatch({type:GET_USER,payload:response.data.user})
    } catch (error) {
        console.log(error.response.data)
    }
}

