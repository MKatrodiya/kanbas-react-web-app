import { Navigate, Route, Routes, useParams } from "react-router";
import EditDetails from "./EditDetails";
import { Link } from "react-router-dom";
import EditQuestions from "./Questions";

function EditQuiz() {
  const { courseId, quizId } = useParams();

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit/Details`}
          >
            Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
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
