import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { auth } from "../firebase/firebaseConfig";
import { loginUser } from '@/actions/auth';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login');
            }
            else {
                dispatch(loginUser(user.uid, user.email))
            }
        });
    }, [dispatch])

    return <>{children}</>;

}
