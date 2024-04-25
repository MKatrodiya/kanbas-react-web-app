import QuizzesList from "./List";
import QuizDetails from "./Details";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import EditQuiz from "./Edit";
import QuizPreview from "./Preview";
import { useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { useEffect } from "react";

function Quizzes() {
  const navigate = useNavigate();
  let userInfo = JSON.parse(localStorage.getItem("currentUser") ?? "{}");
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
      navigate("/Kanbas/Account/Signin");
    }
  }, []);

  return (
    <>
      {userInfo?._id && (
        <Routes>
          <Route path="/" element={<QuizzesList />} />
          <Route path=":quizId" element={<QuizDetails />} />
          <Route path=":quizId/Edit/*" element={<EditQuiz />} />
          <Route path=":quizId/Preview/*" element={<QuizPreview />} />
        </Routes>
      )}
    </>
  );
}
export default Quizzes;
