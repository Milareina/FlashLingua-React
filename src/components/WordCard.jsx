
import PropTypes from 'prop-types';
import '../styles/WordCard.scss';

const WordCard = ({ word, translation, onCheck }) => {
    return (
        <div className="word-card">
            <h3>{word}</h3>
            <p>{translation}</p>
            <button className="check-button" onClick={() => onCheck(word)}>
                Проверить
            </button>
        </div>
    );
};

WordCard.propTypes = {
    word: PropTypes.string.isRequired,         
    translation: PropTypes.string.isRequired, 
    onCheck: PropTypes.func.isRequired        
};

export default WordCard;

