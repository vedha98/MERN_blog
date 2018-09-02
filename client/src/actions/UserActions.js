import {LOGIN_USER,REGISTER_USER} from '../actions/Types';
import axios from 'axios';


export const LoginUser = (user)=> dispatch =>{
  console.log(user);

axios
.post('/users/authenticate',user)
.then(res=>
  dispatch({
    type:LOGIN_USER,payload:res.data
  })
)
}
export const RegisterUser = (user)=> dispatch =>{
axios
.post('/users/register',user)
.then(res=>
  dispatch({
    type:REGISTER_USER,payload:res.data
  })
)
}
