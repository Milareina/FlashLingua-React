import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer';
import WordTable from './pages/homePage/WordTable';
import NotFound from './pages/notFoundPage/NotFound';
import WordPointer from './pages/gamePage/WordPointer';
import { WordProvider } from './context/WordContext';
import './styles/App.scss';

const HomePage = () => (
    <main className="main">
        <h1>Список слов</h1>
        <section>
            <WordTable />
        </section>
    </main>
);

const GamePage = () => (
    <main className="main">
        <h1>Карточки слов</h1>
        <section>
            <WordPointer />
        </section>
    </main>
);

const App = () => {
    return (
        <WordProvider>
        <Router>
            <div className="app">
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        </WordProvider>
    );
};

export default App;


