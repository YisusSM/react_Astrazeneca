import axios from "axios";
import { saveAllServices, saveGroupsInsights, saveGroupsInsights, saveServicesByGroup,saveServiceInfo } from "@/actions/services";


export const status = async () => {
    const res = await axios.get(process.env.IP_CONFIG);
    return res;

}
export const getGroups = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/services/groupInsights');
        dispatch(saveGroupsInsights(res.data))
    }
}

export const listenStatus = async () => {

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

export const getServiceInfo = (name) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/services/name/${name}`)
        dispatch(saveServiceInfo(res.data))
    }
}