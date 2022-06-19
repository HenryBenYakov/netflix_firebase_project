import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
            uid: userAuth.uid, email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
