import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
    let currentPath = paths.split("/")[0];
    currentPath = decodeURIComponent(currentPath);

    return (
        <div>
            <h2><HiMiniBars3 /> {course?.name + " > " + currentPath}</h2>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                        <Route path="/*" element={<h1>Not Available</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;
