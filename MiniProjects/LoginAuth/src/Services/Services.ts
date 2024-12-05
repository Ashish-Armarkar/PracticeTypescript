import axios from "axios"
import { USER_CONTEXT_TYPE, USERS } from "../Models/Types";
import { compare } from "bcryptjs";
import React from "react";


const baseUrl = "http://localhost:5000";
export const addUser = (userData:USERS | undefined) =>{
    typeof userData !== null &&
    axios.post(baseUrl+"/users", userData)
}

export const fetchUser = ()=>{
   let data =  axios.get(baseUrl+"/users");
   return data;

}

export const fetchLoginCredintials = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let res = await axios.get(baseUrl+"/users");
    let data = res.data;
    const form = e.target as HTMLFormElement;
    let userEnteredEmail: string = (form[0] as HTMLFormElement).value;
    let userEnteredPassword:string = (form[1] as HTMLFormElement).value;
    let confirmedUser = data.find(async (ele:any) => ele.email === userEnteredEmail && await compare(userEnteredPassword, ele.password));
    return confirmedUser;
    
}

export const sessionUser = (user: USER_CONTEXT_TYPE | undefined) =>{


}