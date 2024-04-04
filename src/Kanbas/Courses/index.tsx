import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaAngleRight, FaCaretRight, FaGlasses } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import CollapsibleNavigation from "./CollapsibleNavigation";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const { pathname } = useLocation();
  const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
  let currentPath = paths.split("/")[0];
  currentPath = decodeURIComponent(currentPath);
  const assignmentId = paths?.split("/")?.[1];

  return (
    <>
      <div className="wd-breadcrumbs d-none d-md-block">
        <div
          className="d-none d-md-flex ms-4 p-2"
          style={{ alignItems: "center" }}
        >
          <HiMiniBars3 className="text-danger" />
          <div className="ms-2 text-danger align-middle">{course?.name}</div>
          <div className={`ms-2 align-middle d-inline`}>
            <FaAngleRight />
            {currentPath}
          </div>
          {assignmentId && (
            <div className={`ms-2 align-middle d-inline`}>
              <FaAngleRight />
              {assignmentId}
            </div>
          )}
          <div style={{ marginLeft: "auto" }}>
            <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
              <FaGlasses /> Student View
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-2 mb-4 d-none d-md-flex" />
      <div className="d-flex">
        <CourseNavigation />
        <div className="d-block w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            <Route path="/*" element={<h1>Not Available</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;
