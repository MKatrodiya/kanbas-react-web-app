import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaFileExport, FaFileImport } from "react-icons/fa";
import { FaGear, FaFilter } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const as = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const es = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  const handleClick = (parameter = "Hello") => {
    console.log(parameter);
  };

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="d-block p-2">
        <div className="float-end">
          <button className="wd-grades-button me-3">
            <FaFileImport />
            &nbsp;Import
          </button>
          <button className="wd-grades-button p-2 mb-2 me-3">
            <FaFileExport />
            &nbsp;Export<i className="fa fa-caret-down ms-2"></i>
          </button>
          <button className="wd-grades-button p-2 mb-2">
            <FaGear />
          </button>
        </div>
        <div className="col-12 mt-2" style={{ clear: "both" }}>
          <div className="row">
            <div className="col-6">
              <span className="va-grade-input-header">
                <b>Student Names</b>
              </span>
            </div>
            <div className="col-6">
              <span className="va-grade-input-header">
                <b>Assignment Names</b>
              </span>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="studentName"
                placeholder="Search Students"
                title="Search students by name"
              />
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="assignmentName"
                placeholder="Search Assignments"
                title="Search by assignments"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <button
            className="wd-grades-button me-1 mb-3"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <FaFilter /> Apply Filter
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered wd-grades-table">
            <thead className="thead-light">
              <th style={{ textAlign: "left", paddingLeft: "10px" }}>
                Student Name
              </th>
              {as.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </thead>

            <tbody>
              {es.map((enrollment) => {
                const user = db.users.find(
                  (user) => user._id === enrollment.user
                );
                return (
                  <tr>
                    <td className="wd-grades-name">
                      {user?.firstName} {user?.lastName}
                    </td>
                    {as.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return (
                        <td>
                          {grade?.grade ||
                            `${Math.floor(
                              Math.random() * (100 - 60 + 1) + 60
                            )}`}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Grades;
