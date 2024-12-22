// src/api.js
const BASE_URL = "http://itgirlschool.justmakeit.ru/api/words";

export const fetchWords = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch words");
  return await response.json();
};

export const addWord = async (word) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(word),
  });
  if (!response.ok) throw new Error("Failed to add word");
  return response.json();
};

export const updateWord = async (id, word) => {
  const response = await fetch(`${BASE_URL}/${id}/update`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(word),
  });
  if (!response.ok) throw new Error("Failed to update word");
  return response.json();
};

export const deleteWord = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/delete`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to delete word");
};
