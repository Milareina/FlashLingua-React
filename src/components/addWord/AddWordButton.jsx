import {  useState, useContext } from "react";
import { WordContext } from "../../context/WordContext";


function AddWordForm() {
  const { handleAddWord } = useContext(WordContext);
  const [formData, setFormData] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const [errors, setErrors] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = "Поле не должно быть пустым";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await handleAddWord(formData); 
      setFormData({
        english: "",
        transcription: "",
        russian: "",
      }); 
    } catch (error) {
      console.error("Ошибка при добавлении слова:", error);
    }
  };

  return (
    <form className="add-word-form" onSubmit={handleSubmit}>
      <h2>Добавить новое слово</h2>
      <div className="form-group">
        <label htmlFor="english">Английский</label>
        <input
          type="text"
          name="english"
          id="english"
          value={formData.english}
          onChange={handleInputChange}
          className={errors.english ? "error-border" : ""}
        />
        {errors.english && <div className="error-message">{errors.english}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="transcription">Транскрипция</label>
        <input
          type="text"
          name="transcription"
          id="transcription"
          value={formData.transcription}
          onChange={handleInputChange}
          className={errors.transcription ? "error-border" : ""}
        />
        {errors.transcription && <div className="error-message">{errors.transcription}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="russian">Русский</label>
        <input
          type="text"
          name="russian"
          id="russian"
          value={formData.russian}
          onChange={handleInputChange}
          className={errors.russian ? "error-border" : ""}
        />
        {errors.russian && <div className="error-message">{errors.russian}</div>}
      </div>
      <button type="submit" className="save-word-btn">
        Сохранить
      </button>
    </form>
  );
}

export default AddWordForm;