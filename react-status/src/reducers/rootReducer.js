import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { servicesReducer } from "./servicesReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    services: servicesReducer
});