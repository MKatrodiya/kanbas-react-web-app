import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector } from "react-redux";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dueDate = assignment?.dueDate.split("T")[0];
  debugger;

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
            />
          </div>
          <div className="row mt-4">
            <textarea
              name="description"
              id="description"
              cols={20}
              rows={5}
              className="form-control"
            >
              This is a description of the assignment. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iusto modi temporibus, nesciunt
              ea facilis alias tempora deserunt est, corrupti sapiente
              aspernatur molestias, ex inventore eligendi a accusantium mollitia
              earum consequuntur!
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
              <select id="assignment-group" className="form-select">
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
              <select id="display-grade-as" className="form-select">
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
                    <select id="Assign" className="form-select">
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
                  />
                </div>

                <div className="col-6 mt-3">
                  <label className="form-label" htmlFor="available-from">
                    <b>Available from</b>
                  </label>
                  <input
                    className="form-control"
                    id="available-from"
                    type="datetime"
                    value="2024-01-07"
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
                    value="2024-01-08"
                  />
                </div>

                <div className="col-12 pe-0 ps-0 mt-4">
                  <button className="btn wd-add-asmt-button">
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
              <input id="update-checkbox" type="checkbox" className="me-2" />
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
