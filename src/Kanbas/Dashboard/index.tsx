import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <input
        value={course.name}
        placeholder="Type the course name"
        className="form-control w-50"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        placeholder="Type tge course number"
        className="form-control w-50"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        placeholder="Select the start date"
        className="form-control w-50"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        placeholder="Select end date"
        className="form-control w-50"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-success" onClick={addNewCourse}>
        <FaPlus></FaPlus> Add Course
      </button>
      <button className="btn btn-secondary ms-2" onClick={updateCourse}>
        <FaEdit></FaEdit> Update Course
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div
                className="card"
                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    style={{ height: 150 }}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}{" "}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ border: "none" }}
                    className="btn"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    <FaTrash
                      className="text-danger"
                      style={{ fontSize: "125%" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
