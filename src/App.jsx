import './normalize.scss';
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import React from 'react';


function App() {

    return (
        <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
        </div>
    );
}

export default App;
