import React from 'react';
import logo from '../../assets/images/icon-spotify.png';
import { clientId, redirectUri } from 'constants';
import utils from 'utils';
import './index.scss';

const Login = () => {
  const handleBtnLoginClick = () => {
    const responseType = 'code';
    const scope = 'user-read-private user-read-email';
    const state = utils.generateRandomString(16);
    const redirectUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
    window.location.href = redirectUrl;
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
