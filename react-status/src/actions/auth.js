import { types } from "../types/types";


export const loginUser = (uid, displayName) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName,
    }
})
export const authLogOut = () => ({
    type: types.authLogout
})


