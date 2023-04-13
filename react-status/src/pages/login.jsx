
import { useForm } from '@/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/helpers/auth';
import { PublicRoute } from '@/components/PublicRoute';

export default function Login() {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: 'jesussm_0001@hotmail.com',
    lPassword: 'notiene'
  });
  const { uid } = useSelector(state => state.auth)
  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(lEmail)
    dispatch(login(lEmail, lPassword));
  }

  if (!uid) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h3 className='text-black mx-auto text-center'>Ingreso</h3>
          <form onSubmit={handleLogin} className='space-y-6'>
            <div className="mt-1">
              <input
                type="text"
                className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Correo"
                name="lEmail"
                onChange={handleLoginInputChange}
                value={lEmail}
              />
            </div>
            <div className="block text-sm font-medium text-gray-700">
              <input
                type="password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Contraseña"
                name="lPassword"
                onChange={handleLoginInputChange}
                value={lPassword}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
Login.Auth = PublicRoute
