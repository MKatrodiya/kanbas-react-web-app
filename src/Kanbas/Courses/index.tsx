import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
    let currentPath = paths.split("/")[0];
    currentPath = decodeURIComponent(currentPath);

    return (
        <>
            <div className="wd-breadcrumbs">
                <div className="d-none d-md-flex ms-4 p-2" style={{ alignItems: "center" }}>
                    <HiMiniBars3 className="text-danger" />
                    <div className="ms-2 text-danger align-middle">{course?.name}</div>
                    <div className="ms-2 align-middle d-inline"> {"> " + currentPath}</div>
                    <div style={{ marginLeft: "auto" }}>
                        <button className="btn" style={{ backgroundColor: "#f5f5f5" }}>
                            <FaGlasses /> Student View
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-2 mb-4" />
            <div className="d-flex">
                <CourseNavigation />
                <div
                    className="d-block w-100" >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                        <Route path="/*" element={<h1>Not Available</h1>} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default Courses;
