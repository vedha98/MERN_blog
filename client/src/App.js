import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {Switch,Route,BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={Home}/>
        </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
