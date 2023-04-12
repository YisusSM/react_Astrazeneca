import axios from "axios";
import io from 'socket.io-client';
import { saveServicesByGroup } from "@/actions/services";

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

export const getAllServices = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/services/')
        dispatch(saveAllServices(res.data))
    }
}

export const getServicesByGroup = (group) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/services/group/${group}`)
        dispatch(saveServicesByGroup(res.data))
    }
}