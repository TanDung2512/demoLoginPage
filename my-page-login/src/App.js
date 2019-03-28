import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from './components/Signin/Signin';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/signin" component={Signin}/>
        </Router>
      </div>
    );
  }
}

export default App;
