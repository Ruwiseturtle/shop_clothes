
import './App.css';
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';

const Homepage = lazy(() => import('./pages/Homepage/Homepage.jsx'));

function App() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />}/>
    </Route>
  </Routes>;
}

export default App;
