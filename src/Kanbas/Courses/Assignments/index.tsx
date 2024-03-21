import React from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaEllipsisV,
  FaGripVertical,
  FaPlus,
  FaRegStickyNote,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { setAssignment } from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="d-flex">
        <div className="wd-search-assignments">
          <input
            type="text"
            className="form-control"
            name="SearchAssignments"
            placeholder="Search for Assignments"
          />
        </div>
        <div className="wd-asmt-buttons-on-right">
          <button className="btn wd-asmt-button me-2">
            <FaPlus /> Group
          </button>
          <button
            className="btn btn-danger me-2"
            style={{ marginTop: "10px" }}
            onClick={() => {
              navigate(`/Kanbas/Courses/${courseId}/Assignments/0`);
            }}
          >
            <FaPlus /> Assignment
          </button>
          <button className="btn wd-asmt-button me-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaGripVertical className="me-2" />
            <FaChevronRight className="me-2" />
            ASSIGNMENTS
            <span className="float-end">
              <button className="wd-asmt-weightage me-2">40% of Total</button>
              <FaCheckCircle className="text-success" />
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => {
              const options: Intl.DateTimeFormatOptions = {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              };
              const dueDate = new Date(assignment.dueDate);
              const date = dueDate.toLocaleString("en-US", options);
              return (
                <li className="list-group-item">
                  <FaGripVertical className="me-2" />
                  <FaRegStickyNote className="me-2 text-success" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    onClick={() => dispatch(setAssignment(assignment))}
                    style={{ fontSize: "1.25em" }}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                  <br />
                  <div>
                    <span className="text-danger ms-5">Multiple Modules </span>|{" "}
                    <b>Due</b> {date} |{assignment.points} pts
                  </div>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
