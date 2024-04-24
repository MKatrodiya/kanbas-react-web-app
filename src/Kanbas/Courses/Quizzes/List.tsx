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
  const [quizzesList, setQuizzesList] = useState<any>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  // const [quiz, setQuiz] = useState<String>();
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

  // DROPDOWN FUNCTIONALITY ------------------------------------------------------
  const handleDropdownToggle = (quiz: any) => {
    setShowDropdown(!showDropdown);
    setSelectedQuiz(quiz);
  };

  const handleEditQuiz = () => {
    if (selectedQuiz) {
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${selectedQuiz._id}`);
    }
    setShowDropdown(false);
  };

  const handleDeleteQuiz = async () => {
    const toBeDeletedQuiz = client.deleteQuiz(selectedQuiz._id);
    const updatedQuizzesList = quizzesList.filter(
      (q: any) => q._id !== selectedQuiz._id
    );
    setQuizzesList(updatedQuizzesList);
    setShowDropdown(false);
  };

  const handlePublishQuiz = async () => {
    if (selectedQuiz.status === "Unpublished") {
      selectedQuiz.status = "Published";
    } else {
      selectedQuiz.status = "Unpublished";
    }
    const updatedQuizData = await client.updateQuiz(
      selectedQuiz._id,
      selectedQuiz
    );
    // const updatedQuizzesList = quizzesList.map((quiz: any) => {
    //   if (quiz._id === selectedQuiz._id) {
    //     return updatedQuizData;
    //   }
    //   return quiz;
    // });
    // setQuizzesList(updatedQuizzesList);
    setShowDropdown(false);
  };

  // -----------------------------------------------------------------------------

  const getCurrentAvailabilityStatus = (
    availableDate: any,
    availableUntilDate: any
  ) => {
    const currentDate = new Date();
    const availableDateObj = new Date(availableDate);
    const availableUntilDateObj = new Date(availableUntilDate);

    if (availableDate === undefined || availableUntilDate === undefined) {
      return "Take anytime";
    }

    if (currentDate > availableUntilDateObj) {
      return "Closed";
    } else if (
      currentDate >= availableDateObj &&
      currentDate <= availableUntilDateObj
    ) {
      return "Available";
    } else if (availableDate) {
      return `Not available until ${
        availableDate ? new Date(availableDate).toISOString().split("T")[0] : ""
      }`;
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
              <div className="va-div-flex">
                <FaRocket className="text-success me-2" />
                <div className="va-div-flex-col">
                  <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}>
                    {quiz?.title}
                  </Link>
                  <div className="va-div-flex">
                    <div>
                      Status -{" "}
                      {getCurrentAvailabilityStatus(
                        quiz.availableDate,
                        quiz.availableUntil
                      )}
                      {""}
                    </div>
                    <div>
                      Due -{" "}
                      {quiz.dueDate
                        ? new Date(quiz.dueDate).toISOString().split("T")[0]
                        : "No Due Date"}
                    </div>
                    <div>Questions - </div>
                    <div>Points - </div>
                  </div>
                </div>
                <span className="float-end va-flex-end">
                  <button
                    className="btn ms-2"
                    // onClick={() => handleDeleteModule(module?._id)}
                  ></button>
                  <FaCheckCircle className="text-success ms-2" />
                  <FaEllipsisV
                    className="ms-2"
                    onClick={() => handleDropdownToggle(quiz)}
                  />
                  {showDropdown && selectedQuiz?._id === quiz._id && (
                    <div className="dropdown-menu show">
                      <button
                        className="dropdown-item"
                        onClick={handleEditQuiz}
                      >
                        Edit
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={handleDeleteQuiz}
                      >
                        Delete
                      </button>
                      {selectedQuiz.status === "Unpublished" && (
                        <button
                          className="dropdown-item"
                          onClick={handlePublishQuiz}
                        >
                          Publish
                        </button>
                      )}
                      {selectedQuiz.status === "Published" && (
                        <button
                          className="dropdown-item"
                          onClick={handlePublishQuiz}
                        >
                          Unpublish
                        </button>
                      )}
                      {/* Other dropdown items for Copy and Sort */}
                    </div>
                  )}
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default QuizzesList;
