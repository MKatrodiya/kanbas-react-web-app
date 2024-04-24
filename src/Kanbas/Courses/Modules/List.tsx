import React, { useEffect, useState } from "react";
import "./index.css";
import db from "../../Database";
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
import { FaTrash } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import {
  addModule,
  updateModule,
  deleteModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => {
      dispatch(setModules(modules));
    });
  }, [courseId]);
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const [selectedModule, setSelectedModule] = useState(modulesList?.[0]);

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="float-end wd-course-button-bar">
        <button className="btn wd-course-button">Collapse All</button>
        <button className="btn wd-course-button ms-2">View Progress</button>
        <select className="form-select wd-publish d-inline wd-course-button ms-2">
          <FaCheckCircle className="me-1" />
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
      <input
        className="mb-2 w-75"
        value={module?.name}
        style={{ height: "38px" }}
        onChange={(e) =>
          dispatch(
            setModule({
              ...module,
              name: e.target.value,
            })
          )
        }
      />
      <button className="btn btn-success ms-2 mb-1" onClick={handleAddModule}>
        Add
      </button>
      <button
        className="btn btn-success ms-2 mb-1"
        onClick={handleUpdateModule}
      >
        Update
      </button>
      <br />
      <textarea
        className="mb-2 w-75"
        value={module?.description}
        onChange={(e) =>
          dispatch(
            setModule({
              ...module,
              description: e.target.value,
            })
          )
        }
      />
      <ul className="list-group wd-modules">
        {modulesList
          .filter((module) => module?.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaGripVertical className="me-1" />
                {selectedModule?._id === module?._id ? (
                  <FaChevronDown className="me-2" />
                ) : (
                  <FaChevronRight className="me-2" />
                )}
                {module?.name}
                <span className="float-end">
                  <button
                    style={{
                      height: "30px",
                      marginTop: "-3px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    className="btn btn-warning"
                    onClick={(e) => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn ms-2"
                    onClick={() => handleDeleteModule(module?._id)}
                  >
                    <FaTrash
                      className="text-danger"
                      style={{ fontSize: "125%" }}
                    />
                  </button>
                  <FaCheckCircle className="text-success ms-2" />
                  <FaPlus className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule?._id === module?._id && (
                <ul className="list-group">
                  {module?.lessons?.map((lesson: any, index: any) => (
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
