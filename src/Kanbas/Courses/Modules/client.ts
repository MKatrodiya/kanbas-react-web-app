import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

export interface Lesson {
  name: string;
  description: string;
  module: string;
}
export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
}

const api = axios.create({
  withCredentials: true,
});

export const findModulesForCourse = async (courseId: any) => {
  const response = await api.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: any, module: any) => {
  const response = await api.post(`${COURSES_API}/${courseId}/modules`, module);
  console.log(response);
  return response.data;
};

export const deleteModule = async (moduleId: any) => {
  const response = await api.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: any) => {
  const response = await api.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};
