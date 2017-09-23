import React from 'react';
export default function (props) {
  return (
    <form className="signIn" onSubmit={props.onSubmit}> {/* 登录*/}
      <div className="row">
        <input type="text" placeholder="账号(试用'1')"
          value={props.formData.username}
          onChange={props.onChange.bind(null, 'username')}/>
      </div>
      <div className="row">
        <input type="password" placeholder="请输入密码(试用'1')"
        value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')}/>
      </div>
      <div className="row actions">
        <button type="submit">登录</button>
        <a href="#" onClick={props.onForgotPassword}>忘记密码了？</a>
      </div>
    </form>
  )
}