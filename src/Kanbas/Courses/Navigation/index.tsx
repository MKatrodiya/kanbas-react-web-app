import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Settings"];
    const { pathname } = useLocation();

    return (
        <div className="d-none d-md-block">
            <ul className="wd-navigation">
                {links.map((link, index) => (
                    <li key={index} className={decodeURIComponent(pathname).includes(link) ? "wd-active" : ""}>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CourseNavigation;

