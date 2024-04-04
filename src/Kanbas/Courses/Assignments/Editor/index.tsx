import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from "../assignmentsReducer";
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId !== "0") {
      client.updateAssignment(assignment).then((status) => {
        dispatch(updateAssignment(assignment));
      });
    } else {
      client
        .createAssignment(courseId, assignment)
        .then((status) => dispatch(addAssignment(assignment)));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dueDate = assignment?.dueDate.split("T")[0];
  const availableFromDate = assignment?.availableFromDate.split("T")[0];
  const availableUntilDate = assignment?.availableUntilDate.split("T")[0];

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="float-end">
        <span
          className="wd-asmt-button"
          style={{ color: "green", backgroundColor: "white", border: "none" }}
        >
          <FaCheckCircle className="me-2" />
          Published
        </span>
        <button
          className="wd-asmt-button me-2 p-2 mb-2"
          style={{ border: "1px solid lightgray", width: "30px" }}
        >
          <FaEllipsisV />
        </button>
      </div>
      <hr style={{ clear: "both" }} />
      <form method="POST">
        <div className="m-5">
          <div className="row">
            <label className="ps-0" htmlFor="assignment_name">
              Assignment Name
            </label>
            <input
              type="text"
              name="assignmentName"
              id="assignment_name"
              className="form-control"
              value={assignment?.title}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, title: e.target.value })
                )
              }
            />
          </div>
          <div className="row mt-4">
            <textarea
              name="description"
              id="description"
              cols={20}
              rows={5}
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, description: e.target.value })
                )
              }
            >
              {assignment?.description}
            </textarea>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="points">
                Points
              </label>
            </div>
            <div className="col-6">
              <input
                type="number"
                id="points"
                min="0"
                max="100"
                value={assignment?.points}
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <label
                className="form-label float-end"
                htmlFor="assignment-group"
              >
                Assignment Group
              </label>
            </div>
            <div className="col-6">
              <select id="assignment-group" className="form-select" disabled>
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="PROJECT">PROJECT</option>
                <option value="QUIZZES">QUIZZES</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <label
                className="form-label float-end"
                htmlFor="display-grade-as"
              >
                Display Grade as
              </label>
            </div>
            <div className="col-6">
              <select id="display-grade-as" className="form-select" disabled>
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="Assign">
                Assign
              </label>
            </div>
            <div className="col-6">
              <div className="row border border-1" style={{ margin: "3px" }}>
                <div className="col-12">
                  <label className="form-label mt-2" style={{ width: "100%" }}>
                    <div>
                      <b>Assign to</b>
                    </div>
                    <select id="Assign" className="form-select" disabled>
                      <option value="Everyone">Everyone</option>
                      <option value="Everyone">Everyone</option>
                      <option value="Everyone">Everyone</option>
                    </select>
                  </label>
                </div>

                <div className="col-12 mt-2">
                  <label className="form-label" htmlFor="Due">
                    <b>Due</b>
                  </label>
                  <input
                    className="form-control"
                    id="Due"
                    type="date"
                    value={dueDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-6 mt-3">
                  <label className="form-label" htmlFor="available-from">
                    <b>Available from</b>
                  </label>
                  <input
                    className="form-control"
                    id="available-from"
                    type="date"
                    value={availableFromDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableFromDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-6 mt-3">
                  <label className="form-label" htmlFor="until">
                    <b>Until</b>
                  </label>
                  <input
                    className="form-control"
                    id="until"
                    type="date"
                    value={availableUntilDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableUntilDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-12 pe-0 ps-0 mt-4">
                  <button
                    className="btn wd-add-asmt-button"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-plus"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div>
              <input
                id="update-checkbox"
                type="checkbox"
                className="me-2"
                disabled
              />
              <label htmlFor="update-checkbox">
                Notify users that this content has changed
              </label>
            </div>
            <div className="ms-auto">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button className="wd-asmt-button" type="submit">
                  Cancel
                </button>
              </Link>
              <button
                className="wd-asmt-button wd-btn-save"
                type="submit"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AssignmentEditor;
