import React from 'react';
import logo from '../../assets/images/icon-spotify.png';
import './index.scss';

const Login = () => {
  const handleBtnLoginClick = () => {
    console.warn('click');
  };

  return (
    <div className="login">
      <div className="card">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={handleBtnLoginClick} className="btn-login">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
