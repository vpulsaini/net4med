import axios from "axios";
export default axios.create({
 baseURL:"http://10.1.0.134:8080/mmc/match",
 headers:{
     "Content-type":"application/json"
 }

})