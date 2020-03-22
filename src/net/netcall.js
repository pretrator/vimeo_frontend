import axios from "axios";
const getdat=()=>{
    console.log("Called Successfully")
    return axios.get("https://starlord.hackerearth.com/bankAccount").then((r)=>{
        return r.data
    })
}
export default getdat