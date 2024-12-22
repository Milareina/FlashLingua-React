import React from "react";
import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import AddWordForm from "../../components/addWord/AddWordButton";
import { WordContext } from "../../context/WordContext";
import { fetchWords } from "../../api/Api";
import "./WordTable.module.scss";

function WordTable() {
    const { words, setWords, handleUpdateWord, handleDeleteWord } = useContext(WordContext);
    const [editingWord, setEditingWord] = useState(null); 
    const [tempWord, setTempWord] = useState({}); 
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const loadWords = async () => {
            const wordsFromApi = await fetchWords();
            setWords(wordsFromApi);
        };
        loadWords();
    }, [setWords]);

    const handleWordAdded = () => {
        fetchWords().then((newWords) => {
            setWords(newWords);
        });
    };


    const handleEdit = (word) => {
        setEditingWord(word.id);
        setTempWord({ ...word });
        setErrors({});
    };

    const handleCancel = () => {
        setEditingWord(null);
        setTempWord({});
        setErrors({});
    };

    const handleSave = async () => {
        const validationErrors = validateFields(tempWord);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            alert("Все поля должны быть заполнены");
            return;
        }

        await handleUpdateWord(editingWord, tempWord);
        setEditingWord(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempWord((prev) => ({ ...prev, [name]: value }));

        if (value.trim()) {
            setErrors((prevErrors) => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[name];  
                return updatedErrors;
            });
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "Поле не должно быть пустым" }));
        }
    };

        const validateFields = (fields) => {
            const errors = {};
            if (!fields.english || fields.english.trim() === "") errors.english = "Поле не должно быть пустым";
            if (!fields.transcription || fields.transcription.trim() === "") errors.transcription = "Поле не должно быть пустым";
            if (!fields.russian || fields.russian.trim() === "") errors.russian = "Поле не должно быть пустым";
            return errors;
    };
    
        const renderEditableRow = () => {
            const isSaveDisabled = Object.keys(errors).length > 0 || 
                !tempWord.english || 
                !tempWord.transcription || 
                !tempWord.russian;

                return (   
        <>
            <div className={`cell ${errors.english ? "error" : ""}`}>
                <input
                    type="text"
                    name="english"
                    value={tempWord.english || ""}
                    onChange={handleInputChange}
                    className={errors.english ? "error-border" : ""}
                />
                {errors.english && <div className="error-message">{errors.english}</div>}
            </div>
            <div className={`cell ${errors.transcription ? "error" : ""}`}>
                <input
                    type="text"
                    name="transcription"
                    value={tempWord.transcription || ""}
                    onChange={handleInputChange}
                    className={errors.transcription ? "error-border" : ""}
                />
                {errors.transcription && <div className="error-message">{errors.transcription}</div>}
            </div>
            <div className={`cell ${errors.russian ? "error" : ""}`}>
            <input
        
                    type="text"
                    name="russian"
                    value={tempWord.russian || ""}
                    onChange={handleInputChange}
                    className={errors.russian ? "error-border" : ""}
                />
                {errors.russian && <div className="error-message">{errors.russian}</div>}
            </div>
            <div className="cell">
                <button onClick={handleSave} className="save-btn" disabled={isSaveDisabled}>
                    Сохранить
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                    Отмена
                </button>
            </div>
        </>
    );

};

    const renderReadOnlyRow = (word) => (
        <>
            <div className="cell">{word.english}</div>
            <div className="cell">{word.transcription}</div>
            <div className="cell">{word.russian}</div>
            <div className="cell">
                <button onClick={() => handleEdit(word)} className="edit-btn">
                    Изменить
                </button>
                <button onClick={() => handleDeleteWord(word.id)} className="delete-btn">Удалить</button>
            </div>
        </>
    );

    return (

        <div>
            <AddWordForm onWordAdded={handleWordAdded} />
                
        <div className="word-grid">
            
            <div className="header">#</div>
            <div className="header">Английский</div>
            <div className="header">Транскрипция</div>
            <div className="header">Русский</div>
            <div className="header">Действие</div>

            {words.map((word, index) => (
                <React.Fragment key={word.id}>
                    <div className="cell">{index + 1}</div>
                    {editingWord === word.id
                        ? renderEditableRow(word)
                        : renderReadOnlyRow(word)}
                </React.Fragment>
            ))}
        </div>
        </div>
    );
}

WordTable.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            english: PropTypes.string.isRequired,
            transcription: PropTypes.string.isRequired,
            russian: PropTypes.string.isRequired,
        })
    ).isRequired,
};

WordTable.propTypes = {
    words: PropTypes.array.isRequired,
    
}
export default WordTable;
