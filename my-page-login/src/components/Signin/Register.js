import React, {Component} from 'react';
import axios from 'axios';
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName : "",
      password : "",
      email : "",
    }
  }

  handleChange = type => event => {
    this.setState({[type] : event.target.value});
  }

  handleRegister = _ => {
    if (this.state.userName !== "" && this.state.password !=="" && this.state.email !== ""){
      axios.post("http://localhost:4000/users/register",{
        userName : this.state.userName,
        email : this.state.email,
        password : this.state.password,
      })
      .then( response => {
        console.log(response);
      })
    }
  }
  render(){
    return (
      <React.Fragment>
        <div className="input-group" style={{width: "100%"}}>
          <input name="userName" type="text" className="form-group px-4 py-2 bg-light border border-light rounded" placeholder="Full Name" style={{width: "100%"}} onChange={this.handleChange("userName")}/>
        </div>
        <div className="input-group" style={{width: "100%"}}>
          <input name="email" type="email" className="form-group  px-4 py-2 bg-light border border-light mb-3 text-monospace" placeholder="E-mail address" style={{width: "100%"}} onChange={this.handleChange("email")}/>
        </div>
        <div className="input-group" style={{width: "100%"}}>
          <input  name="password"type="password" className="form-group  px-4 py-2 bg-light border border-light mb-4 text-monospace" placeholder="Password" style={{width: "100%"}} onChange={this.handleChange("password")}/>
        </div>
        <div className="d-flex flex-row mb-5">
          <button className ="btn btn-primary px-4  py-1 " onClick={this.handleRegister}>Register</button>
        </div>
      </React.Fragment>
    )
  }
}
export default Login;
