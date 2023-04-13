
import { useSelector } from 'react-redux';
import LoadingScreen from './loaded/Loaded';
import { PrivateRoute } from '@/components/PrivateRoute';
import { Groups } from '@/components/Home/Groups';


export default function Home() {

  const { uid } = useSelector(state => state.auth);
  
  if (uid == null) {
    return <LoadingScreen />
  }
  return (
      <Groups/>
    

  )
}
Home.Auth = PrivateRoute
