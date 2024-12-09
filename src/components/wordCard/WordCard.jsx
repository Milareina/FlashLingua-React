import { useState } from "react";
import PropTypes from 'prop-types';
import './WordCard.module.scss';

const WordCard = ({ word, transcription, translation, onCheck }) => {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false); 

    const handleShowTranslation = () => {
        setIsTranslationVisible(true);
        if (onCheck) onCheck(); 
    };

    return (
        <div className="word-card">
            <div className="word">{word}</div>
            <div className="transcription">{transcription}</div>
            {isTranslationVisible ? (
                <div className="translation visible">
                    {translation}
                </div>
            ) : (
                <button onClick={handleShowTranslation} className="check-button">
                    Проверить
                </button>
            )}
        </div>
    );
};

WordCard.propTypes = {
    word: PropTypes.string.isRequired,         
    transcription: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired, 
    onCheck: PropTypes.func.isRequired,

};

export default WordCard;

