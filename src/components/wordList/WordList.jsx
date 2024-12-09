
import WordCard from '../wordCard/WordCard';
import './WordList.module.scss';

const WordList = () => {
    const words = [
        { word: 'Hello', transcription: '[həˈləʊ]', translation: 'Привет' },
        
    ];

    const handleCheck = (word) => {
        console.log(`Проверка слова: ${word}`);
    };

    return (
        <div className="word-list">
            {words.map((item, index) => (
                <WordCard
                key={index}
                word={item.word}
                transcription={item.transcription}
                translation={item.translation}
                onCheck={() => handleCheck(item.word)}
                />
            ))}
        </div>
    );
};

export default WordList;