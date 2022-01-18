import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Homepage() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App;
