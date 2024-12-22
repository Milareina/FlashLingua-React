import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoadingIndicator from "../components/loading/Loading";
import ErrorIndicator from "../components/errorMessage/ErrorMessage";
import { fetchWords, addWord, updateWord, deleteWord } from "../api/Api";

const WordContext = createContext();

const WordProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWords = async () => {
            setLoading(true);
            try {
                const data = await fetchWords();
                setWords(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadWords();
    }, []);

    const handleAddWord = async (word) => {
        try {
            const newWord = await addWord(word);
            setWords((prevWords) => [...prevWords, newWord]);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleUpdateWord = async (id, updatedWord) => {
        try {
            const updated = await updateWord(id, updatedWord);
            setWords((prevWords) =>
                prevWords.map((word) => (word.id === id ? updated : word))
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteWord = async (id) => {
        try {
            await deleteWord(id);
            setWords((prevWords) => prevWords.filter((word) => word.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <WordContext.Provider
            value={{ words, loading, error, handleAddWord, handleUpdateWord, handleDeleteWord }}
        >
            {loading && <LoadingIndicator />}
            {error && (
    <ErrorIndicator message={error} />
)}
            {children}
        </WordContext.Provider>
    );
};
WordProvider.propTypes = {
    children: PropTypes.node.isRequired,

};
export { WordProvider, WordContext };
