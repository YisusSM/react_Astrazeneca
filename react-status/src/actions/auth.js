import { types } from "../types/types";


export const loginUser = (uid, displayName,verified,admin) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName,
        verified,
        admin
    }
})
export const authLogOut = () => ({
    type: types.authLogout
})


