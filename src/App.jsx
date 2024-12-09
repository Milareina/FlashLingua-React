
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WordList from './components/wordList/WordList';
import WordTable from './components/wordTable/WordTable';
import './styles/App.scss';
import words from './data/words.json';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
            <h1>Карточки слов</h1>
                <section className="card-section">
                <WordList /> </section>
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


