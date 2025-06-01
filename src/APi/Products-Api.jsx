import axios from "axios";


export const fetchdata =  async () =>{
    const response = await axios.get("/data/api.json")

   console.log("sssssss" ,response);
    return response.data;
} 


export const fetchuser =  async () =>{
    const response = await axios.get("/data/api.json")

   console.log("sssssss" ,response);
    return response.data.user;
} 




