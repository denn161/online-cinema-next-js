import { userSelector } from '@/store/selectors/userSelector'
import { useSelector } from './useTypedSelector'

export const useAuth = ()=>useSelector(userSelector)