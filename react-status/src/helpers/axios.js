import axios from "axios";
import io from 'socket.io-client';

export const status = async ()=>{
    const res = await axios.get(process.env.IP_CONFIG);
    return res;

}
export const getGroups = async ()=>{
    const res = await axios.get(process.env.API_GROUPS);
    return res;

}

export const listenStatus = async ()=>{

}