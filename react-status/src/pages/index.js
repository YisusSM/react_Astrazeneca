
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingScreen from './login/loaded/Loaded';

export default function Home() {
  const router = useRouter();
  const {uid} = useSelector(state=> state.auth);
  useEffect(() => {
    if (!uid) {
      router.push('/login/login'); // redirige al usuario a la página de inicio de sesión si no está autenticado// no renderiza nada si el usuario no está autenticado
    }
  }, [])
  if (!uid) {
    return <LoadingScreen/>
  }
  return (
    <main className="flex min-h-sc  reen flex-col items-center justify-between p-24 sm:text-center">
      <Link href='/login/login'> Go to Login </Link>
    </main>

  )
}
