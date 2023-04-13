import { types } from "../types/types";


const initialState = {
    uid: null,
    name: null
}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:

            return {
                uid: '',
                displayName: '',
            }

        default:
            return state;
    }
}