import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useState } from 'react';
import Register from "./Register";
import Login from './Login';
import Projects from './Projects';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/" element={<Navigate to="/login" />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
