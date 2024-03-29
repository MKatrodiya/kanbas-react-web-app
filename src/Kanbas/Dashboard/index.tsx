import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src={`/images/${course.image}`} className="card-img-top"
                                        style={{ height: 150 }} />
                                </Link>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default Dashboard;