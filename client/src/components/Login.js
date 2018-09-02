import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/UserActions';
class Login extends React.Component {
state = {
  email:'',
  password:''
}

  onSubmit = e=>{
    e.preventDefault();
    const Logininfo={
      username:this.state.email,
      password:this.state.password
    }
    this.props.LoginUser(Logininfo);

  }
  onChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  render () {
  return (
    <div>
    <div className="Container">
     <Form onSubmit={this.onSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="Text" name="email" id="exampleEmail" onChange={this.onChange} value={this.state.email} placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup >
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.onChange} placeholder="password placeholder" />
      </FormGroup>
       <Button>Login</Button>
  </Form></div>
      </div>
  );
  }
}
const mapStateToProps = (state)=>({
  user:state.user
})

export default connect(mapStateToProps,{LoginUser})(Login);
