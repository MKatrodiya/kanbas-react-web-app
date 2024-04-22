import React from "react";
import QuizzesList from "./List";
import QuizDetails from "./Details";
import { Route, Routes } from "react-router";

function Quizzes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizzesList />} />
        <Route path=":quizId" element={<QuizDetails />} />
      </Routes>
    </>
  );
}
export default Quizzes;
