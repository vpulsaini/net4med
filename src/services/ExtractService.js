import httpClient from "../http-common";
const getAll =()=>{
   return httpClient.get("/extract");

}
export default { getAll };
