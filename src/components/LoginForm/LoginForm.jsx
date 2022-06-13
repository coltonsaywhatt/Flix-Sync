import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'; 

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <div className='login-container'>
        <div id="login">
          <form className='form-login' autoComplete="off" onSubmit={handleSubmit}>
              <span class="fontawesome-user"><i class="fa-solid fa-user"></i></span>
              <input type="text" name="email" value={credentials.email} onChange={handleChange} required /> 
              <span class="fontawesome-lock"><i class="fa-solid fa-lock"></i></span>
              <input type="password" name="password" value={credentials.password} onChange={handleChange} required />              
              <input type="submit"/>
          </form>
          <p>Not a member? <a href="#" class="blue">Sign up now</a><span class="fontawesome-arrow-right"><i class="fa-solid fa-arrow-right"></i></span></p>
          <div className='app-store'>
            <img src="https://i.ibb.co/bgrnHKw/googleplay.png" alt="" />
            <img src="https://i.ibb.co/2Fn1d4R/applestore.png" alt="" />
          </div>
        </div>
        <p className="error-message">&nbsp;{error}</p>
        
      </div>
    </>
  );
}