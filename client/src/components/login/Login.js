// Import Setvices
import * as userService from './../../services/userService';
// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Default
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/forms.css';

export const Login = () => {
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setLoginData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    userService
      .login(loginData.email, loginData.password)
      .then((result) => {
        if (result.code === 403) {
          setErrors((state) => ({
            ...state,
            message: result.message,
          }));
        } else {
          // console.log(result);
          userLogin(result);
          navigate('/');
          setErrors({})
        }
      })
      .catch(() => {});
  };

  const validMail = (e) => {
    var mailValidation = /\S+@\S+\.\S+/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: !mailValidation.test(loginData[e.target.name]),
    }));
  };

  // console.log(errors);
  return (
    <div className="signin">
      <div className="back-img">
        <div className="sign-in-text">
          <h2 className="active">Sign In</h2>
        </div>
        <div className="layer"></div>
        <p className="point">&#9650;</p>
      </div>

      <form onSubmit={loginSubmitHandler}>
        <div className="form-section">
          {errors.message && (
            <span className="mdl-textfield__error">{errors.message}</span>
          )}
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              className="mdl-textfield__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={onChange}
              onBlur={(e) => validMail(e)}
            />
            {errors.email && (
              <span className="mdl-textfield__error">
                Enter a correct Email
              </span>
            )}
          </div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              className="mdl-textfield__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={onChange}
            />
          </div>
        </div>
        <button className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
          Sign In
        </button>
      </form>
    </div>
  );
};
