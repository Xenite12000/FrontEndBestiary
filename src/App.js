import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/home';
import FavoriteList from './Page/favoritelist';
import Loginpage from './Page/loginpage';

function App() {
  return (
    <>
    <BrowserRouter>
        <main>
            <Routes>
                <Route path="/favorite" element={<FavoriteList /> } />
                <Route path="/" element={<Home /> } />
                <Route path="/home" element={<Home /> } />
                <Route path="/login" element={<Loginpage />} />
            </Routes>
        </main>
    </BrowserRouter>
    </>
  );
}

export default App;
