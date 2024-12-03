
import WordCard from './WordCard';
import '../styles/WordList.scss';

const WordList = () => {
    const words = [
        { word: 'Hello', translation: 'Привет' },
        { word: 'Goodbye', translation: 'Пока' },
        
    ];

    return (
        <div className="word-list">
            {words.map((item, index) => (
                <WordCard key={index} word={item.word} translation={item.translation} />
            ))}
        </div>
    );
};

export default WordList;
