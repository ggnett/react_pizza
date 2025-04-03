import './normalize.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <NavBar />
            <Content />
        </div>
    );
}

export default App;
