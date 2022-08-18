// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Setvices
import * as userService from '../../services/userService';
// Import Default
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(UserContext);
  useEffect(() => {
    userService
      .logout(user.accessToken)
      .then(() => {
        userLogout();
        toast.success('Successfully Logout!');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err);
      });
      
  });

  return null;
};
