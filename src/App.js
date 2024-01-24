import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/home';
import FavoriteList from './Page/favoritelist';
import Loginpage from './Page/loginpage';
import Universepage from './Page/Universepage';
import BeastsByUniverse from './Page/beastsuniverse';
import { VariableProvider } from './TestVariable/VariableContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <VariableProvider>
        <main>
            <Routes>
                <Route path="/favorite" element={<FavoriteList /> } />
                <Route path="/" element={<Home /> } />
                <Route path="/home" element={<Home /> } />
                <Route path="/univers" element={<Universepage />} />
                <Route path="/BeastsUniverse" element={<BeastsByUniverse />} />
                <Route path="/login" element={<Loginpage />} />
            </Routes>
        </main>
      </VariableProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
