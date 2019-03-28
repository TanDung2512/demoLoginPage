import React, {Component} from 'react';
import axios from 'axios';
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleChange = type =>(event) => {
    this.setState({[type] : event.target.value })
    console.log(this.state)
  }

  handleLogin = _ => {
    // if not fill in, appear "remind block"
    if (this.state.email !== "" && this.state.password !== ""){
        axios.post("http://localhost:4000/users/login",{
        email : this.state.email,
        password : this.state.password,
      })
      .then(response => {
        console.log(response);
      })
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="input-group" style={{width: "100%"}}>
          <input name="email" type="email" className="form-group px-4 py-2 bg-light border border-light rounded" placeholder="E-mail address" style={{width: "100%"}} onChange={this.handleChange('email')}/>
        </div>
        <div className="input-group" style={{width: "100%"}}>
          <input name="password" type="password" className="form-group  px-4 py-2 bg-light border border-light mb-4 text-monospace" placeholder="password" style={{width: "100%"}} onChange={this.handleChange('password')}/>
        </div>
        <div className="d-flex flex-row mb-5">
          <button className ="btn btn-primary px-4  py-1 " onClick={this.handleLogin}>Login</button>
          <button className ="btn"><h6>Forget password?</h6></button>
        </div>
      </React.Fragment>
    )
  }
}
export default Login;
