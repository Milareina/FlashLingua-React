import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer';
import WordTable from './components/wordTable/WordTable';
import NotFound from './components/page404/NotFound';
import WordPointer from './components/wordPointer/WordPointer';
import words from './data/words.json';
import './styles/App.scss';

const HomePage = () => (
    <main className="main">
        <h1>Список слов</h1>
        <section>
            <WordTable words={words} />
        </section>
    </main>
);

const GamePage = () => (
    <main className="main">
        <h1>Карточки слов</h1>
        <section>
            <WordPointer words={words} />
        </section>
    </main>
);

const App = () => {
    return (
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
    );
};

export default App;


