import wordsData from '../../data/words.json'; 
import WordCard from '../wordCard/WordCard';
import './WordList.module.scss';

const WordList = () => {
    const handleCheck = (word) => {
        console.log(`Проверка слова: ${word}`);
    };

    return (
        <div className="word-list">
            {wordsData.map((item) => (
                <WordCard
                    key={item.id} 
                    word={item.english}
                    transcription={item.transcription}
                    translation={item.russian}
                    onCheck={() => handleCheck(item.english)} 
                />
            ))}
        </div>
    );
};

export default WordList;
