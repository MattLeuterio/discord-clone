import React, { useEffect } from 'react';
import './App.css';
import {  useDispatch, useSelector } from 'react-redux';

import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar/index.js';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })  
  }, [])
 
  return (
    <div className="app">
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* Chat */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
