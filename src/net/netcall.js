import axios from "axios";
const getdat=()=>{
    console.log("Called Successfully")
    return axios.get("http://starlord.hackerearth.com/bankAccount").then((r)=>{
        return r.data
    }).then(
        (d)=>{
            return d.map((i,j)=>{
                return {
                    ...i,
                    id:j
                }
            })
        }
    )
}
export default getdat