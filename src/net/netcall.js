import axios from "axios";
const getdat=()=>{
    return axios.get("http://starlord.hackerearth.com/bankAccount")
}
export default getdat