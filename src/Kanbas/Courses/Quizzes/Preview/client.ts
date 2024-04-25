import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_API_URL;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

const api = axios.create({
  withCredentials: true,
});

export const findAnswersForQuiz = async (quizId: any, userId: any) => {
  const response = await api.get(
    `${QUIZZES_API}/${quizId}/users/${userId}/answers`
  );
  return response.data;
};

export const submitAnswers = async (quizId: any, userId: any, answers: any) => {
  let response = null;
  if (!answers?._id) {
    response = await api.post(
      `${QUIZZES_API}/${quizId}/users/${userId}/answers`,
      answers
    );
  } else {
    response = await api.put(
      `${QUIZZES_API}/${quizId}/users/${userId}/answers`,
      answers
    );
  }
  debugger;
  return response?.data;
};
