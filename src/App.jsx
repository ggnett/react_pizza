import './normalize.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProductCard from './components/ProductCard/ProductCard'

function App() {
    return (
        <div class="wrapper">
            <Header />
            <NavBar />
            <ProductCard />
        </div>
    );
}

export default App;
