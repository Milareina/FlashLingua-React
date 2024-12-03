
import PropTypes from 'prop-types';
import '../styles/WordCard.scss';

const WordCard = ({ word, translation }) => {
    return (
        <div className="word-card">
            <h3>{word}</h3>
            <p>{translation}</p>
        </div>
    );
};


WordCard.propTypes = {
    word: PropTypes.string.isRequired,        
    translation: PropTypes.string.isRequired  
};
export default WordCard;

