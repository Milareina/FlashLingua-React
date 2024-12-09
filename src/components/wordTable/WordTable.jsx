import { useState } from "react";
import PropTypes from "prop-types";
import "./WordTable.module.scss";


function WordTable({ words }) {
    const [editingWord, setEditingWord] = useState(null); 
    const [tempWord, setTempWord] = useState({}); 

    const handleEdit = (word) => {
        setEditingWord(word.id);
        setTempWord({ ...word });
    };

    const handleCancel = () => {
        setEditingWord(null);
        setTempWord({});
    };

    const handleSave = () => {
        console.log("Сохранено слово:", tempWord); 
        setEditingWord(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempWord((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="word-grid">
            
            <div className="header">#</div>
            <div className="header">Английский</div>
            <div className="header">Транскрипция</div>
            <div className="header">Русский</div>
            <div className="header">Действие</div>

           
            {words.map((word, index) => (
                <>
                    <div className="cell">{index + 1}</div>
                    {editingWord === word.id ? (
                        <>
                            <div className="cell">
                                <input
                                    type="text"
                                    name="english"
                                    value={tempWord.english}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="cell">
                                <input
                                    type="text"
                                    name="transcription"
                                    value={tempWord.transcription}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="cell">
                                <input
                                    type="text"
                                    name="russian"
                                    value={tempWord.russian}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="cell">
                                <button onClick={handleSave} className="save-btn">
                                    Сохранить
                                </button>
                                <button onClick={handleCancel} className="cancel-btn">
                                    Отмена
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="cell">{word.english}</div>
                            <div className="cell">{word.transcription}</div>
                            <div className="cell">{word.russian}</div>
                            <div className="cell">
                                <button onClick={() => handleEdit(word)} className="edit-btn">
                                    Изменить
                                </button>
                                <button className="delete-btn">Удалить</button>
                            </div>
                        </>
                    )}
                </>
            ))}
        </div>
    );
}

WordTable.propTypes = {
    words: PropTypes.array.isRequired,
    
}
export default WordTable;
