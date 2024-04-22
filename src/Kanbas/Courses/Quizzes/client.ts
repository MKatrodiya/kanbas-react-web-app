import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export interface Quiz {
  title: string;
  type?: string;
  course: string;
  points?: number;
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
  };
  const response = await api.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return response.data;
};
