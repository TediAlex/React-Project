import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

import * as userService from './../../services/userService';
import { UserContext } from '../../contexts/UserContext';
export const Login = () => {
    const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
//   const [userData, setUserData] = useState({});
  const onChange = (e) => {
    setLoginData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    userService.login(loginData.email, loginData.password)
      .then((result) => {
        console.log(result);
        userLogin(result);
        navigate('/');
      })
      .catch(() => {
        navigate('/404');
      });
      
  };

  return (
    <div className={styles['signin']}>
      <div className={styles['back-img']}>
        <div className={styles['sign-in-text']}>
          <h2 className={styles['active']}>Sign In</h2>
        </div>
        <div className={styles['layer']}></div>
        <p className={styles['point']}>&#9650;</p>
      </div>

      <form onSubmit={loginSubmitHandler}>
        <div className={styles['form-section']}>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <input
              className={styles['mdl-textfield__input']}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Enter a correct Email
            </span>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <input
              className={styles['mdl-textfield__input']}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={loginData.password}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
        </div>
        <button
          className={
            styles[
              'sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored'
            ]
          }
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
