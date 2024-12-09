
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WordTable from './components/wordTable/WordTable';
import WordPointer from './components/wordPointer/WordPointer';
import words from './data/words.json';
import './styles/App.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
            <h1>Карточки слов</h1>
                <section className="card-section">
                    <WordPointer words={words} />
                </section>
                <section>
            <h1>Список слов</h1>
                    <WordTable words={words} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;


