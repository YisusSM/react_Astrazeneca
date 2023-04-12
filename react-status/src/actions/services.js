import { types } from "../types/types";

export const saveAllServices = (data) => ({
  type: types.getAllServices,
  payload: {
    data
  }
})

export const saveServicesByGroup = (servicesByGroup) => ({
  type: types.getServicesByGroup,
  payload: {
    servicesByGroup
  }
})