import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as coursesClient from "./Courses/client";
import "./styles.css";
import CollapsibleNavigation from "./Courses/CollapsibleNavigation";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const findAllCourses = async () => {
    const response = await coursesClient.findAllCourses();
    setCourses(response);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
    semester: "Fall 2024",
  });
  const addNewCourse = async () => {
    const response = await coursesClient.createCourse(course);
    setCourses([...courses, response]);
  };
  const deleteCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await coursesClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <>
      <CollapsibleNavigation />
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route path="Courses/*" element={<h1>Courses</h1>} />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={courses} />}
              />
            </Routes>
          </div>
        </div>
      </Provider>
    </>
  );
}
export default Kanbas;
