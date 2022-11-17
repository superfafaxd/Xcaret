//import '../styles/globals.css'
import { Provider } from "react-redux"
import { store } from '../store/store'
import 'tailwindcss/tailwind.css'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function MyApp({ Component, pageProps }) {
  return <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
