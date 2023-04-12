
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingScreen from './loaded/Loaded';
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { loginUser } from '@/actions/auth';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        router.push('/login');
      }
      else {
        dispatch(loginUser(user.uid, user.email))
      }
    });
  }, [])
  if (uid == null) {
    return <LoadingScreen />
  }
  return (
    <main className="flex min-h-sc  reen flex-col items-center justify-between p-24 sm:text-center">
      <Link href='/login'> Go to Login </Link>
    </main>

  )
}
