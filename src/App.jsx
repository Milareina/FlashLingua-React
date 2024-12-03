
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';

import './styles/App.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <WordList />
                
            </main>
            <Footer />
        </div>
    );
};

export default App;


