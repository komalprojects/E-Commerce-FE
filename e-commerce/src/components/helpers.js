import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

export const useAuth = () => {
  const auth = useSelector((state) => state.login.data);
  return !isEmpty(auth);
};
