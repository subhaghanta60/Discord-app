import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  // Navigate, 
  } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
// import { useNavigate } from 'react-router-dom';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route  path ='/login' element={<LoginPage />} />
        <Route   path ='/register' element={<RegisterPage />} />
        <Route exact path="/dashboard"  element={<Dashboard />} />
        <Route  exact path = "/" element={<Dashboard />} />
      </Routes>
    </Router>
    <AlertNotification/>
  </>
  );

};

export default App;