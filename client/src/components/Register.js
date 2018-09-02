import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import {RegisterUser} from '../actions/UserActions';
import {connect} from 'react-redux';
class Register extends React.Component {
  state = {
    email:'',
    password:'',
    name:'',
    username:''
  }

    onSubmit = e=>{
      e.preventDefault();
      const reginfo={
        username:this.state.username,
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      }
      this.props.RegisterUser(reginfo);

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
           <Label for="exampleEmail">Name</Label>
           <Input type="Text" name="name" id="name" onChange={this.onChange} value={this.state.name} placeholder="with a placeholder" />
         </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">username</Label>
          <Input type="Text" name="username" id="username" onChange={this.onChange} value={this.state.username} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="Email" name="email" id="Email" onChange={this.onChange} value={this.state.email} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup >
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.onChange} placeholder="password placeholder" />
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

export default connect(mapStateToProps,{RegisterUser})(Register);
