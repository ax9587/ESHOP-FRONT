import axios from "axios";
import { server } from "./server";

const BASE_URL = `${server}`;
const TOKEN = localStorage.getItem("persist:root") ?  
( JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).accessToken  )
//localstorage is text, use  JSON.parse
 :null;
console.log(TOKEN);
console.log(localStorage.getItem("persist:root"));
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const getImageRequest =  (id) => {
 
     axios.get(`${server}/image/get-image-content/${id}`).then((res) => {
      return res.data;
    });
    
 
};


