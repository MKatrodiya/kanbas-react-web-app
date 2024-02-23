import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaGripVertical,
  FaChevronDown,
  FaPlus,
  FaChevronRight,
} from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="float-end wd-course-button-bar">
        <button className="btn wd-course-button">Collapse All</button>
        <button className="btn wd-course-button ms-2">View Progress</button>
        <select className="form-select wd-publish d-inline wd-course-button ms-2">
          <FaCheckCircle className="me-1" />
          bj
          <option>Publish All</option>
          <option>Unpublish All</option>
          <option>Unpublish All</option>
        </select>
        <button
          className="btn wd-course-button ms-2"
          style={{
            borderColor: "red",
            color: "white",
            backgroundColor: "#DC3545",
          }}
        >
          + Module
        </button>
        <button className="btn wd-course-button ms-2">
          <FaEllipsisV />
        </button>
      </div>
      <hr style={{ clear: "both" }} />
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaGripVertical className="me-1" />
              {selectedModule._id === module._id ? (
                <FaChevronDown className="me-2" />
              ) : (
                <FaChevronRight className="me-2" />
              )}
              {module?.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module?.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaGripVertical className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
