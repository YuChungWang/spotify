import React, { useEffect } from 'react';
import Login from 'components/Login';
import utils from 'utils';
import './App.scss';

function App() {
  useEffect(() => {
    const code = utils.getParam('code');
    const state = utils.getParam('state');

    if (code) {
      localStorage.setItem('code', code);
    }
    if (state) {
      localStorage.setItem('state', state);
    }
    window.history.replaceState('', '', '/'); // remove all queries
  });

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
