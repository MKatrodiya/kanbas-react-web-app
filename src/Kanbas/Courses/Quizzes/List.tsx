import React, { useEffect, useState } from "react";
import { Quiz } from "./client";
import * as client from "./client";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import "./index.css";
import { FaChevronDown, FaRocket } from "react-icons/fa6";
import { Link } from "react-router-dom";

function QuizzesList() {
  const { courseId } = useParams();
  const [quizzesList, setQuizzesList] = useState<Quiz[]>([]);
  const [quiz, setQuiz] = useState<String>();
  const navigate = useNavigate();

  useEffect(() => {
    client.findQuizzesForCourse(courseId).then((quizzes) => {
      setQuizzesList(quizzes);
    });
  }, [courseId]);
  const handleAddQuiz = async () => {
    const newQuiz = await client.createQuiz(courseId);
    if (newQuiz) {
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${newQuiz._id}`);
    }
  };

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <input
        type="text"
        className="form-control w-25"
        placeholder="Search Quizzes"
      />
      <div className="float-end wd-course-button-bar">
        <button
          className="btn wd-course-button ms-2"
          style={{
            borderColor: "red",
            color: "white",
            backgroundColor: "#DC3545",
          }}
          onClick={handleAddQuiz}
        >
          + Quiz
        </button>
        <button className="btn wd-course-button ms-2">
          <FaEllipsisV />
        </button>
      </div>
      <hr style={{ clear: "both" }} />
      <ul className="list-group wd-quizzes">
        <li className="list-group-item wd-quizzes-title">
          <FaChevronDown className="ms-2 me-2" style={{ fontSize: "0.5em" }} />
          Assignment Quizzes
        </li>
        {quizzesList
          .filter((quiz: any) => quiz?.course === courseId)
          .map((quiz: any, index: Number) => (
            <li
              key={index.toString()}
              className="list-group-item"
              //   onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaRocket className="text-success me-2" />
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}>
                  {quiz?.title}
                </Link>
                <span className="float-end">
                  <button
                    className="btn ms-2"
                    // onClick={() => handleDeleteModule(module?._id)}
                  ></button>
                  <FaCheckCircle className="text-success ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default QuizzesList;
