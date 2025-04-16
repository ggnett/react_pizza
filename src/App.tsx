import './normalize.scss';
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
// import Cart from './pages/Cart/Cart';
import * as React from 'react';
import Preload from './components/Preload/Preload';
// import PizzaDesc from './pages/PizzaDesc/PizzaDesc';

const Cart = React.lazy(() => import('./pages/Cart/Cart'));
const PizzaDesc = React.lazy(() => import('./pages/PizzaDesc/PizzaDesc'));
function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/cart"
                    element={
                        <React.Suspense fallback={<Preload />}>
                            <Cart />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/pizza/:id"
                    element={
                        <React.Suspense fallback={<Preload />}>
                            <PizzaDesc />
                        </React.Suspense>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
