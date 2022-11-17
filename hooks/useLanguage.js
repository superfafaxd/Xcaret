import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { onLanguage } from '../store/data/appSlice';


export const useLanguage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;

  dispatch(onLanguage(locale))
  
  return {
    locale,
  }
}
