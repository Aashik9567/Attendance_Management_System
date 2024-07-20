import { create } from "zustand";
const intialLoginstate={
    id:null,
    email:null,
    password:null,
    name:'a',
    role:null,
    avatar:null,
}
const store =create((set)=>({
    loginUserData:intialLoginstate,
    isLogin:false,
    setLoginStatus: (status)=>{
        set({isLogin: status})
    },
    setLoggedInUser:(data)=>{
        set({loginUserData:data,isLogin:true})},
    logoutUser:()=>{
        set({loginUserData:intialLoginstate,isLogin:false})
    }
}))
export default store;