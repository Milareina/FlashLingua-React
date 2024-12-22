export const randomWords = [
  { english: "house", transcription: "/haʊs/", russian: "дом" },
  { english: "computer", transcription: "/kəmˈpjuːtə/", russian: "компьютер" },
  { english: "book", transcription: "/bʊk/", russian: "книга" },
  { english: "precise", transcription: "/prɪˈsaɪs/", russian: "точный" },
  {
    english: "vocabulary",
    transcription: "/vəˈkæbjʊləri/",
    russian: "словарный запас",
  },
  { english: "evaluate", transcription: "/ɪˈvæljʊeɪt/", russian: "оценивать" },
  {
    english: "resilience",
    transcription: "/rɪˈzɪlɪəns/",
    russian: "устойчивость",
  },
  {
    english: "complicated",
    transcription: "/ˈkɒmplɪkeɪtɪd/",
    russian: "сложный",
  },
  { english: "diverse", transcription: "/daɪˈvɜːs/", russian: "разнообразный" },
  { english: "inspire", transcription: "/ɪnˈspaɪə/", russian: "вдохновлять" },
  { english: "analysis", transcription: "/əˈnæləsɪs/", russian: "анализ" },
  { english: "approach", transcription: "/əˈprəʊtʃ/", russian: "подход" },
  { english: "concept", transcription: "/ˈkɒnsɛpt/", russian: "понятие" },
  {
    english: "unpredictable",
    transcription: "/ˌʌnprɪˈdɪktəbl/",
    russian: "непредсказуемый",
  },
];

export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  return randomWords[randomIndex];
};
