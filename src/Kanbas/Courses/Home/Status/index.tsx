import { FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaCheckCircle, FaCrosshairs, FaExclamation, FaExclamationCircle, FaFileImport, FaSignOutAlt } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";

function CourseStatus() {
    const statusButtons = [
        { title: "Import Existing Content", icon: <FaFileImport /> },
        { title: "Import From Commons", icon: <FaSignOutAlt /> },
        { title: "Choose Home Page", icon: <FaCrosshairs /> },
        { title: "View Course Stream", icon: <FaChartBar /> },
        { title: "New Anouncement", icon: <FaBullhorn /> },
        { title: "New Analytics", icon: <FaChartBar /> },
        { title: "View Course Notifications", icon: <FaBell /> },
    ]

    const comingUp = [
        { title: "Lecture", icon: <FaCalendar />, course: "CS4545.24342.202410", date: "Jan 12 at 11:45am" },
        { title: "CS5800 Lecture", icon: <FaCalendar />, course: "CS5800.24442.2024", date: "Jan 14 at 9:50am" },
        { title: "CS5010 Lecture", icon: <FaCalendar />, course: "CS5010.3467.202402", date: "Jan 12 at 11:45am" },
    ]

    return (
        <div className="d-none d-lg-block me-2" style={{ width: "300px" }}>
            {/* <div>Course Status</div> */}
            <button className="btn wd-button-ban mb-2 me-2">
                <FaBan />&nbsp;Unpublish
            </button>
            <button className="btn wd-button-publish mb-2" disabled>
                <FaCheckCircle />&nbsp;Published
            </button>
            <ul className="list-group wd-course-right-side-bar">
                {statusButtons.map((button, index) => {
                    return (
                        <li className="list-group-item list-group-item-action">
                            <Link to="#">
                                {button.icon} &nbsp; {button.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <b className="mt-10">To Do</b>
            <ul className="list-group wd-course-todo">
                <li className="list-group-item list-group-item-action"
                ><Link to="#"><FaExclamationCircle className="font-red" />
                        <span className="font-red"> &nbsp;Grade A1 - ENV + HTML</span>
                    </Link>
                    <span className="float-end">x</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 points - Due Jan 11 at
                    11:59pm
                </li>
            </ul>
            <br />

            <b>Coming Up</b>
            <div className="float-end">
                <Link to="#" className="text-decoration-none">
                    <FaCalendar className="font-red" />&nbsp;
                    <span className="font-red">View Calendar</span>
                </Link>
            </div>
            <ul className="list-group wd-course-right-side-bar wd-course-todo">
                {comingUp.map((item, index) => {
                    return (
                        <li className="list-group-item list-group-item-action">
                            <Link to="#">
                                {item.icon} &nbsp; <span className="font-red">{item.title}</span>
                            </Link>
                            <br />&emsp;
                            <span className="text-black m-3">{item.course}</span><br />&emsp;
                            <span className="text-black m-3">{item.date}</span>

                        </li>
                    );
                })}
            </ul>
            <span className="m-4 text-danger">12 more in the next week...</span>
        </div >
    );
}
export default CourseStatus;