import axios from "axios";

const URL: string = "https://fakestoreapi.com";

export const fetchUser = async() =>{
    let myData = axios.get(URL+"/users") 
    return (await myData).data;
}