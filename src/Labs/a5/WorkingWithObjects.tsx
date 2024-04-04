import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS",
    description: "Learn NodeJS",
    course: "CS5610 - Web Development",
  });
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle} className="btn btn-primary">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="btn btn-primary">
        Fetch Assignment
      </button>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <a
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        className="btn btn-primary"
      >
        Update Title
      </a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-primary"
      >
        Update Score
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        className="btn btn-primary"
      >
        Update Completed
      </a>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`} className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`} className="btn btn-primary">
        Get Title
      </a>

      <h4>Module</h4>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
        Update Name
      </a>
      <textarea
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      ></textarea>
      <a
        href={`${MODULE_URL}/description/${module.description}`}
        className="btn btn-primary"
      >
        Update Description
      </a>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/module`} className="btn btn-primary">
        Get Module
      </a>
      <a href={`${API_BASE}/a5/module/name`} className="btn btn-primary">
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;
