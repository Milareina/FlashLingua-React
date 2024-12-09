import { useState } from "react";
import PropTypes from "prop-types";
import WordCard from "../wordList/WordList"; 
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import "./WordPointer.module.scss";

const WordPointer = ({ words, initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("");

    const handleNext = () => {
        if (isAnimating) return;
        setDirection("next");
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex < words.length - 1 ? prevIndex + 1 : 0
            );
            setIsAnimating(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setDirection("prev");
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : words.length - 1
            );
            setIsAnimating(false);
        }, 300);
    };

    if (!words || words.length === 0) {
        return <p>Список слов пуст</p>;
    }

    return (
        <div className="word-pointer">
            <button className="arrow-btn left" onClick={handlePrev}>
                <img src={LeftArrow} alt="Стрелка назад" />
            </button>

            <div className="word-card-wrapper">
                <div
                    className={`card-animation ${
                        isAnimating ? `slide-${direction}` : ""
                    }`}
                >
                    <WordCard {...words[currentIndex]} />
                </div>
            </div>

            <div className="card-index">
                {currentIndex + 1} / {words.length}
            </div>

            <button className="arrow-btn right" onClick={handleNext}>
                <img src={RightArrow} alt="Стрелка вперед" />
            </button>
        </div>
    );
};

WordPointer.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            transcription: PropTypes.string,
            translation: PropTypes.string.isRequired,
        })
    ),
    initialIndex: PropTypes.number,
};

WordPointer.defaultProps = {
    words: [],
    initialIndex: 0,
};

export default WordPointer;