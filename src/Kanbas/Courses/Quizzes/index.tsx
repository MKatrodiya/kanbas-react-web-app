import React from "react";
import QuizzesList from "./List";
import QuizDetails from "./Details";
import { Route, Routes } from "react-router";
import EditQuiz from "./Edit";

function Quizzes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizzesList />} />
        <Route path=":quizId" element={<QuizDetails />} />
        <Route path=":quizId/Edit/*" element={<EditQuiz />} />
      </Routes>
    </>
  );
}
export default Quizzes;
