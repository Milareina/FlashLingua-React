
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';
import WordTable from './components/WordTable';
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


