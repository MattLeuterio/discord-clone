import React from 'react';
import './style.css';
import { auth, provider } from '../../firebase.js';

import { Button } from '@material-ui/core';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo%26Wordmark-Color-Dark-Background-Logo.wine.svg" alt="discord logo" />
      </div>

      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
}

export default Login;
