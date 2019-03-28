import React, { Component } from 'react';
import Login from './Login.js';
import Register from './Register.js';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginTab : true,
    }
  }

  handleChangeTab = (e) => {
    console.log(e.target.getAttribute("name"));
    if(e.target.getAttribute("name")=== "login" && this.state.loginTab !== true){
      this.setState({"loginTab" : true});
    }
    else if (e.target.getAttribute("name") === "register" && this.state.loginTab === true){
      this.setState({"loginTab" : false});
    }
    console.log(this.state.loginTab);
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="container-fluid p-0 m-0" style={{height: window.innerHeight}}>
          <div className="d-flex flex-row" style={{height: "100%"}}>
            <div className="d-none d-lg-block" style={{"background-image":"url(https://www.prolival.fr/wp-content/uploads/2018/03/coffee-work-desk-mug-keyboard-162616.jpg)" ,height:"100%", width:"650px", "background-size":"cover", "background-attachment":"fixed", "background-position":"-180px"}}></div>
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex flex-column align-items-start justify-content-start">
                <h3 className="" >Get more things done with</h3>
                <h3 className="mb-3">Loggin platform.</h3>
                <p className="text-left mb-4 text-muted" >Access to the most powerfull tool in the <br/>entire design and web industry.</p>
                <ul className="nav p-0 mb-3">
                  <li className="nav-item mr-4">
                    <a  className="nav-link px-0 pb-1 border-bottom border-primary"  href="#" ><h6  className="text-dark" name = "login" onClick={this.handleChangeTab}>Login</h6></a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link px-0 pb-1 border-bottom " href="#"><h6 className="text-black-50" name = "register" onClick={this.handleChangeTab}>Register</h6></a>
                  </li>
                </ul>
                {this.state.loginTab ? <Login/>: <Register/>}
                <div className="d-flex flex-row align-items-center">
                  <p className="text-muted ">Or login with </p>
                  <a href="#" class="fa fa-facebook  mx-4 p-2 border rounded-circle"/>
                  <a href="#"class="fa fa-google  p-2 border rounded-circle"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Signin;
