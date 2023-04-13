import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { auth } from "../firebase/firebaseConfig";
import { loginUser } from '@/actions/auth';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

export const PublicRoute = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        });
    }, [dispatch])

    return <>{children}</>;

}
