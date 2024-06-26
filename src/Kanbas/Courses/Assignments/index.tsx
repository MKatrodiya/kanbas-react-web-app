import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaEllipsisV,
  FaGripVertical,
  FaPlus,
  FaRegStickyNote,
  FaTrash,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client.getAllAssignmentsForCourse(courseId).then((assigmentsResponse) => {
      dispatch(setAssignments(assigmentsResponse));
    });
  }, [courseId]);
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const [assignmentToDelete, setAssignmentToDelete] = React.useState({});
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        assignmentToDelete={assignmentToDelete}
      />
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
                    <Button
                      variant="btn me-2"
                      onClick={() => {
                        setModalShow(true);
                        setAssignmentToDelete(assignment);
                      }}
                    >
                      <FaTrash
                        className="text-danger"
                        style={{ fontSize: "125%" }}
                      />
                    </Button>
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

function MyVerticallyCenteredModal(props: any) {
  const dispatch = useDispatch();
  const assignmentId = props?.assignmentToDelete?._id;
  const handleDeleteAssinment = () => {
    client.deleteAssignment(assignmentId).then(() => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to delete this assignment?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>Assignment Name:</b> {props.assignmentToDelete?.title}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-success" onClick={props.onHide}>
          No
        </Button>
        <Button
          className="btn btn-danger"
          onClick={() => {
            handleDeleteAssinment();
            props.onHide();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Assignments;
