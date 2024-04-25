import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_API_URL;
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export interface Quiz {
  title: string;
  type?: string;
  course: string;
  points?: number;
  description?: string;
  dueDate?: Date;
  availableDate?: Date;
  availableUntil?: Date;
  assignmentGroup?: string;
  shuffleAnswers?: boolean;
  timeLimit?: number;
  multipleAttempts?: boolean;
  showCorrectAnswers?: boolean;
  showCorrectAnswersAt?: Date;
  accessCode?: string;
  oneQuestionAtATime?: boolean;
  webcamRequired?: boolean;
  lockQuestionsAfterAnswering?: boolean;
  assignedTo?: string[];
  status?: string;
}

const api = axios.create({
  withCredentials: true,
});

export const findQuizzesForCourse = async (courseId: any) => {
  const response = await api.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

export const findQuizById = async (quizId: any) => {
  const response = await api.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const createQuiz = async (courseId: any) => {
  const quiz = {
    title: "New Quiz",
    course: courseId,
    type: "Graded Quiz",
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
  };
  const response = await api.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return response.data;
};

export const updateQuiz = async (quizId: any, quiz: any) => {
  const response = await api.put(`${QUIZZES_API}/${quizId}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await api.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};
