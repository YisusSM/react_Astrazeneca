import { types } from "../types/types";

const initialState = {
    data: [],
    servicesByGroup: [],
    getServicesGroupInsight: [],
    serviceInfo: {},
    incidentHistory: []
}

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllServices:
    case types.getServicesByGroup:
    case types.getServicesGroupInsight:
    case types.getIncidentHistory:
    case types.getServiceInfo:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}