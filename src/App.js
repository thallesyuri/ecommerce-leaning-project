import React from 'react';
//Importing the routes that's going to surround the each route
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage.component';

const HatsPage = () => {
    return (
        <div>
            <h1>HATS PAGE</h1>
        </div>
    );
};

function App() {
    return (
        //Inside the Route: "exact" is to force the path to match the path
        //"path" is the "address" that you woul like to use
        //"element" is the element the component used
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/shop/hats" element={<HatsPage />} />
            </Routes>
        </div>
    );
}

export default App;
