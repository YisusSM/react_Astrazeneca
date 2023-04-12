
import Link from 'next/link'
import { useSelector } from 'react-redux';
import LoadingScreen from './loaded/Loaded';
import { PrivateRoute } from '@/components/PrivateRoute';


export default function Home() {

  const { uid } = useSelector(state => state.auth);
  
  if (uid == null) {
    return <LoadingScreen />
  }
  return (
    <main className="flex min-h-sc  reen flex-col items-center justify-between p-24 sm:text-center">
      <Link href='/login'> Go to Login </Link>
    </main>

  )
}
Home.Auth = PrivateRoute
