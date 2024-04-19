import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const COURSES_API = `${BASE_API}/api/courses`;

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  semester: string;
}

const api = axios.create({
  withCredentials: true,
});

export const findAllCourses = async () => {
  const response = await api.get(`${COURSES_API}`);
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await api.post(`${COURSES_API}`, course);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await api.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: any) => {
  const response = await api.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};
