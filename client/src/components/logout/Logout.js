// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Setvices
import * as userService from '../../services/userService';
// Import Default
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
export const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(UserContext);
  useEffect(() => {
    userService
      .logout(user.accessToken)
      .then(() => {
        userLogout();
        navigate('/');
      })
      .catch(() => {
        navigate('/404');
      });
  });

  return null;
};
