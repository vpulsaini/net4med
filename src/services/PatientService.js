import httpClient from "../http-common";
const getAll =()=>{
   return httpClient.get("/getMessagesToMe?publicationId=-1&toId=testpwt2@pwt.com&pwd=1234567890");

}
export default { getAll };
