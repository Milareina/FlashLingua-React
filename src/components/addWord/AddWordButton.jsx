import {  useContext } from "react";
import { WordContext } from "../../context/WordContext";
import { getRandomWord } from "../../data/randomWords";

function AddWordButton() {
  const { handleAddWord } = useContext(WordContext); 

  const handleAddRandomWord = async () => {
    const randomWord = getRandomWord(); 
    try {
      await handleAddWord(randomWord);
    } catch (error) {
      console.error("Ошибка при добавлении слова", error);
    }
  };

  return (
    <button className="add-word-btn" onClick={handleAddRandomWord}>
      Добавить случайное слово
    </button>
  );
}

export default AddWordButton;