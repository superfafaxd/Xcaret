import {  isBrowser, isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';


export const useDeviceDetected = () => {
    const [movil, setmovil] = useState(false)
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        (isMobile) ? setmovil(true) : setmovil(false);
        (isBrowser) ?setBrowser(true) : setBrowser(false);
      }, [])

  return {
    movil,
    browser,
  }
}
