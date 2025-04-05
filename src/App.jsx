import './normalize.scss';
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import React from 'react';

export const searchContext = React.createContext('');

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    const [search, setSearch] = React.useState('');

    return (
        <div className="wrapper">
            <searchContext.Provider value={{ searchValue, setSearchValue, search, setSearch }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </searchContext.Provider>
        </div>
    );
}

export default App;
