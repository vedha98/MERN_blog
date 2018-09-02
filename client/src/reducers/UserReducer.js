import {LOGIN_USER,REGISTER_USER} from '../actions/Types';
import axios from 'axios';


const initialState={
  User:{},
posts:[],
loading:false

}

export default function(state = initialState,action) {

switch (action.type) {
  case LOGIN_USER:
  console.log(action.payload);
    return{
...state,user:action.payload,loading:false

    }
    break;
case REGISTER_USER:
console.log(action.payload.msg);
return{...state}
  default:
  return{...state}

}

}
