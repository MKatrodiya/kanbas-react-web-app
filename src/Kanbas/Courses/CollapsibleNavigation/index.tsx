import React, { useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaCamera,
  FaSignOutAlt,
  FaQuestion,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";

function CollapsibleNavigation() {
  const links = [
    {
      label: "Account",
      path: "Account",
      icon: (
        <FaRegUserCircle
          className="fs-2 wd-nav-icon"
          style={{ color: "grey" }}
        />
      ),
    },
    {
      label: "Dashboard",
      path: "Dashboard",
      icon: <FaTachometerAlt className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Courses",
      path: "Courses",
      icon: <FaBook className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Calendar",
      path: "Calendar",
      icon: <FaRegCalendarAlt className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Inbox",
      path: "#",
      icon: <FaInbox className="fs-2 wd-nav-icon" />,
    },
    {
      label: "History",
      path: "#",
      icon: <FaHistory className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Studio",
      path: "#",
      icon: <FaCamera className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Commons",
      path: "#",
      icon: <FaSignOutAlt className="fs-2 wd-nav-icon" />,
    },
    {
      label: "Help",
      path: "#",
      icon: <FaQuestion className="fs-2 wd-nav-icon" />,
    },
  ];
  const courseLinks = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Settings",
  ];
  const hiddenLinks = [
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
  ];
  const [activeMenu, setActiveMenu] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useLocation();
  const courseId = pathname.split("/")?.[3];
  const course = courses.find((course) => course._id === courseId);
  const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
  let currentPath = paths?.split("/")[0];
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    setCollapsed(!collapsed);
    setActiveMenu(menu);
  };

  return (
    <div className="d-block d-md-none">
      <div className="bg-black" style={{ height: "60px", textAlign: "center" }}>
        <button
          onClick={() => handleMenuClick("kanbasNav")}
          style={{ border: "none", height: "100%" }}
          className="float-start bg-black"
        >
          <FaBars className="fs-2" style={{ color: "white" }} />
        </button>
        {pathname.includes("Courses") && (
          <div
            style={{
              color: "white",
              display: "inline-block",
              height: "60px",
              lineHeight: "60px",
            }}
          >
            {course?.name} {">"} {currentPath}
          </div>
        )}
        {pathname.includes("Courses") && (
          <button
            onClick={() => handleMenuClick("courseNav")}
            style={{ border: "none", height: "100%" }}
            className="float-end bg-black"
          >
            <FaChevronDown className="" style={{ color: "white" }} />
          </button>
        )}
      </div>

      {activeMenu === "kanbasNav" && !collapsed && (
        <ul className="list-group">
          {links.map((link, index) => (
            <li
              key={index}
              className={`list-group-item${
                pathname.includes(link.label) ? " wd-collapse-active" : ""
              }`}
            >
              <Link to={`/Kanbas/${link.path}`}>
                <span
                  onClick={() => {
                    handleMenuClick("menu1");
                    navigate(`/Kanbas/${link.path}`);
                  }}
                >
                  {" "}
                  {link.icon} {link.label}{" "}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {activeMenu === "courseNav" && !collapsed && (
        <ul className="list-group">
          {courseLinks.map((link, index) => (
            <li
              key={index}
              className={`list-group-item${
                decodeURIComponent(pathname).includes(link)
                  ? " wd-collapse-active"
                  : ""
              }`}
            >
              <Link
                className="text-danger"
                to={`/Kanbas/Courses/${courseId}/${link}`}
              >
                <span
                  onClick={() => {
                    handleMenuClick("menu1");
                  }}
                >
                  {link}
                </span>
              </Link>
              {hiddenLinks.find((l) => l === link) !== undefined && (
                <FaEyeSlash className="float-end" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollapsibleNavigation;
