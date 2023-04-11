import axios from "axios";

export const status = async ()=>{
    const res = await axios.get('http://localhost:2929');
    return res;

}