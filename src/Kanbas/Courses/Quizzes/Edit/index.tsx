import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import EditDetails from "./EditDetails";
import { Link } from "react-router-dom";
import EditQuestions from "./Questions";
import { useEffect, useState } from "react";
import * as quizzesClient from "../client";

function EditQuiz() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<any>();
  const getQuiz = async () => {
    const quizData = await quizzesClient.findQuizById(quizId);
    setQuiz(quizData);
  };
  useEffect(() => {
    getQuiz();
  }, [quizId]);
  const breadcrumbsElement = document.getElementById("wd-breadcrumbs-id");
  if (breadcrumbsElement) {
    breadcrumbsElement.innerText = quiz?.title || "";
  }

  const location = useLocation();

  return (
    <>
      <ul className="nav nav-tabs">
        <li className={`nav-item`}>
          <Link
            className={`nav-link${
              location.pathname.includes("Details") ? " active" : ""
            }`}
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit/Details`}
          >
            Details
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link
            className={`nav-link${
              location.pathname.includes("Questions") ? " active" : ""
            }`}
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit/Questions`}
          >
            Questions
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="Details" />} />
        <Route path="Details" element={<EditDetails />} />
        <Route path="Questions" element={<EditQuestions />} />
      </Routes>
    </>
  );
}
export default EditQuiz;
