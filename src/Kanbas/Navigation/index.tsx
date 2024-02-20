import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaCamera, FaSignOutAlt, FaQuestion } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", path: "Account", icon: <FaRegUserCircle className="fs-2 wd-nav-icon wd-navigation-account" /> },
        { label: "Dashboard", path: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-nav-icon" /> },
        { label: "Courses", path: "Courses", icon: <FaBook className="fs-2 wd-nav-icon" /> },
        { label: "Calendar", path: "Calendar", icon: <FaRegCalendarAlt className="fs-2 wd-nav-icon" /> },
        { label: "Inbox", path: "#", icon: <FaInbox className="fs-2 wd-nav-icon" /> },
        { label: "History", path: "#", icon: <FaHistory className="fs-2 wd-nav-icon" /> },
        { label: "Studio", path: "#", icon: <FaCamera className="fs-2 wd-nav-icon" /> },
        { label: "Commons", path: "#", icon: <FaSignOutAlt className="fs-2 wd-nav-icon" /> },
        { label: "Help", path: "#", icon: <FaQuestion className="fs-2 wd-nav-icon" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <Link to="http://northeastern.edu">
                    <img
                        src="/images/Northeastern_logo.png"
                        width="60px"
                        alt="Northeastern University Logo" />
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.path}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;