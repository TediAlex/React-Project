// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Services
import * as userService from '../../services/userService';
// Import Style
import '../../css/forms.css'; 
// Import Default
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const userRegData = {
    email: registrationData.email,
    username: registrationData.username,
    password: registrationData.password,
  };
  const registrationHandler = (e) => {
    e.preventDefault();
    userService.registration(userRegData).then((result) => {
      navigate('/');
      userLogin(result);
    });
  };
  const [errors, setErrors] = useState({});
  const validMail = (e) => {
    const mailValidation = /\S+@\S+\.\S+/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: !mailValidation.test(registrationData[e.target.name]),
    }));
  };
  const validText = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: registrationData[e.target.name].length < bound,
    }));
  };
  const validPassword = (e) => {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    let passValidation = false
    if(!lowerCaseLetters.test(registrationData[e.target.name]) ||
    !upperCaseLetters.test(registrationData[e.target.name])  ||
    !numbers.test(registrationData[e.target.name]) ||
    registrationData[e.target.name].length < 6){
      passValidation = true
    }
    setErrors((state) => ({
      ...state,
      [e.target.name]: passValidation
    }));
  };
  const validConfirmPassword = (e) => {
  let confirmPassValidation = false
    if(registrationData.password !== registrationData[e.target.name]){
      confirmPassValidation = true
    }
    setErrors((state) => ({
      ...state,
      [e.target.name]: confirmPassValidation
    }));
  }
  
  return (
    <div className='signin'>
      <div className='back-img'>
        <div className='sign-in-text'>
          <h2 className='active'>Registration</h2>
        </div>
        <div className='layer'></div>
        <p className='point'>&#9650;</p>
      </div>
      <form onSubmit={registrationHandler}>
        <div className='form-section'>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input
              className='mdl-textfield__input'
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={onChange}
              onBlur={(e) => validMail(e)}
              />
              {errors.email && (
                <span className="mdl-textfield__error">
                  Enter a correct Email
                </span>
              )}
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input
              className='mdl-textfield__input'
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={registrationData.username}
              onChange={onChange}
              onBlur={(e) => validText(e, 3)}
              />
              {errors.price &&
              <span className='mdl-textfield__error'>
               Username should be at least 3 characters long!
            </span>
              }
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input
              className='mdl-textfield__input'
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={onChange}
              onBlur={(e) => validPassword(e)}
              />
              {errors.password &&
              <span className='mdl-textfield__error'>
              Passwords must be at least 6 characters, minimum of 1 lower case letter and minimum of 1 numeric character.
            </span>
              }
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input
              className='mdl-textfield__input'
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="ReEnter Password"
              value={registrationData.confirmPassword}
              onChange={onChange}
              onBlur={(e) => validConfirmPassword(e)}
              />
              {errors.confirmPassword &&
              <span className='mdl-textfield__error'>
                Enter same password.
            </span>
              }
          </div>
        </div>
        <button
          className='sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored'
           >
          Registration
        </button>
      </form>
    </div>
  );
};
