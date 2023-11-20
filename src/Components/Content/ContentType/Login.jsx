import React from 'react';

let Login = (props) => {

  let loginElement= React.createRef();
  let passwordElement= React.createRef();

  let changeLogin=()=>{
    let login=loginElement.current.value;
    props.updateLogin(login);
  }
  
    let changePassword=()=>{
      let password=passwordElement.current.value;
      props.updatePassword(password);
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