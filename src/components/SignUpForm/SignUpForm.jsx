import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'; 

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
      <div className='signup-container'>
        <div id="signup">
            <form className='form-signup' autoComplete="off" onSubmit={this.handleSubmit}>
                <span class="fontawesome-user"><i class="fa-solid fa-user"></i></span>
                  <input placeholder='username' type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> 
                <span class="fontawesome-envelope"><i class="fa-solid fa-envelope"></i></span>
                  <input placeholder='email' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <span class="fontawesome-lock"><i class="fa-solid fa-lock"></i></span>
                  <input placeholder='password' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <span class="fontawesome-lock"><i class="fa-solid fa-lock"></i></span>
                  <input placeholder='confirm password' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />                
                <button type="submit" disabled={disable}>SIGN UP</button>
            </form>          
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
      </>
    );
  }
}


        