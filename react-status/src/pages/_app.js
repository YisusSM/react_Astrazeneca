import { store } from '@/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

const Noop = ({ children }) => <>{children}</>;
export default function App({ Component, pageProps }) {
  const Auth = Component.Auth || Noop;
  return (
    <Provider store={store}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  )

}
