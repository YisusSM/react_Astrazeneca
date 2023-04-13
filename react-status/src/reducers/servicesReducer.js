import { types } from "../types/types";

const initialState = {
    data: [],
    servicesByGroup: [],
    getServicesGroupInsight: [],
    serviceInfo: {}
}

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllServices:
      return {
        ...state,
        ...action.payload
      }

    case types.getServicesByGroup:
      return {
        ...state,
        ...action.payload
      }

    case types.getServicesGroupInsight:
    case types.getServiceInfo:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}