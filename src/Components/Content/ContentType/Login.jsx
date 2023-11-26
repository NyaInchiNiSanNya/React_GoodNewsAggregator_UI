import React from 'react';
import {updateLoginActionCreator, updatePasswordActionCreator} from '../../../state';


let Login = (props) => {
  let loginElement= React.createRef();
  let passwordElement= React.createRef();

  let changeLogin=()=>{
    debugger;
    let login=loginElement.current.value;
    let action=updateLoginActionCreator(login);
    props.dispatch(action);
  }
  
    let changePassword=()=>{
      let password=passwordElement.current.value;
      let action=updatePasswordActionCreator(password);
      props.dispatch(action);
    }






  return <div >
    <div >
      <label>Почта</label>
      <input onChange={changeLogin} ref={loginElement} value={props.newLogin}></input>
    </div>

    <div >
      <label >Пароль</label>
      <input  onChange={changePassword} ref={passwordElement} value={props.newPassword}></input>
    </div>

    <div >
      <button >Войти</button>
    </div>
  </div>
};

export default Login;  