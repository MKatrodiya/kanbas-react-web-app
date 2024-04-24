import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_API_URL;
const QUIZZES_API = `${API_BASE}/api/quizzes`;
const QUESTIONS_API = `${API_BASE}/api/questions`;

const api = axios.create({
  withCredentials: true,
});

export const findQuestionsForQuiz = async (quizId: any) => {
  const response = await api.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

export const findQuestionById = async (questionId: any) => {
  const response = await api.get(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};

export const createQuestion = async (quizId: any, question: any) => {
  question.quiz = quizId;
  const response = await api.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return response.data;
};

export const updateQuestion = async (questionId: any, question: any) => {
  const response = await api.put(`${QUESTIONS_API}/${questionId}`, question);
  return response.data;
};

export const bulkCreateQuestions = async (quizId: any, questions: any) => {
  const response = await api.put(
    `${QUIZZES_API}/${quizId}/questions/bulk`,
    questions
  );
  return response.data;
};
