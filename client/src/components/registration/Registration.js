import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import * as userService from '../../services/userService';
import { UserContext } from '../../contexts/UserContext';

import styles from './../login/Login.module.css';

export const Registration = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);
  const [registrationData, setRegistrationData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dicsription: '',
    age: '',
    town: '',
    phone: '',
  });
  const onChange = (e) => {
    setRegistrationData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  // const email = registrationData.email
  // const password = registrationData.password
  const userLoginData = {
    email: registrationData.email,
    username: registrationData.username,
    password: registrationData.password,
  };
  // const [userData, setUserData] = useState({});
  const registrationHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        // 'X-Authorization': `${user.accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(userLoginData),
    })
      .then((response) => response.json())
      .then((result) => {
        navigate('/');
        userLogin(result);
      });
  };
  // console.log(userData)
  return (
    <div className={styles['signin']}>
      <div className={styles['back-img']}>
        <div className={styles['sign-in-text']}>
          <h2 className={styles['active']}>Registration</h2>
        </div>
        <div className={styles['layer']}></div>
        <p className={styles['point']}>&#9650;</p>
      </div>

      <form onSubmit={registrationHandler}>
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
              value={registrationData.email}
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
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={registrationData.username}
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
              placeholder="Password"
              value={registrationData.password}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
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
              id="confirm-password"
              name="confirmPassword"
              placeholder="ReEnter Password"
              value={registrationData.confirmPassword}
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
          Registration
        </button>
      </form>
    </div>
  );
};
