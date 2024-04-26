import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as quizzesClient from "../client";
import * as questionsClient from "../questionsClient";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";
import TrueFalseAnswer from "./TrueFalseAnswer";
import FillInTheBlanksAnswer from "./FillInTheBlanksAnswer";
import { FaCheckCircle } from "react-icons/fa";
import * as answersClient from "./client";

function QuizPreview() {
  const { quizId } = useParams();
  const answerInstructions = [
    {
      type: "Multiple Choice",
      instructions: "Select the only correct answer from the options below.",
    },
    {
      type: "True/False",
      instructions: "Select True or False for the above statement.",
    },
    {
      type: "Fill in the Blanks",
      instructions:
        "Fill in the blanks with the correct answer in the order they appear in the question.",
    },
  ];
  const [quiz, setQuiz] = useState<any>();
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any>();
  const [selectedAnswers, setSelectedAnswers] = useState<any>([]);
  const [savedAnswers, setSavedAnswers] = useState<any>([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const getQuiz = async () => {
    const quizData = await quizzesClient.findQuizById(quizId);
    setQuiz(quizData);
    const questionsData = await questionsClient.findQuestionsForQuiz(quizId);
    setQuestions(questionsData);
    setCurrentQuestion(questionsData[0]);
  };
  const getSavedAnswers = async () => {
    const answers = await answersClient.findAnswersForQuiz(
      quizId,
      currentUser._id
    );
    setSavedAnswers(answers);
    setSelectedAnswers(answers?.answers || []);
  };
  useEffect(() => {
    getQuiz();
    getSavedAnswers();
  }, [quizId]);
  const handleAnswerSelection = (_id: string, answer: any) => {
    const newSelectedAnswers = [...selectedAnswers];
    const currentAnswer = newSelectedAnswers?.find((a) => a.question === _id);
    if (currentAnswer) {
      currentAnswer.answer = answer;
    } else {
      newSelectedAnswers?.push({ question: _id, answer });
    }
    setSelectedAnswers(newSelectedAnswers);
  };
  const handleSubmit = async () => {
    const response = await answersClient.submitAnswers(
      quizId,
      currentUser?._id,
      { ...savedAnswers, answers: selectedAnswers }
    );
  };
  const breadcrumbsElement = document.getElementById("wd-breadcrumbs-id");
  if (breadcrumbsElement) {
    breadcrumbsElement.innerText = quiz?.title || "";
  }

  return (
    <div className="container">
      <h3>{quiz?.title}</h3>
      <hr />
      <h6>
        <b>Quiz Instructions:</b>
      </h6>
      <p dangerouslySetInnerHTML={{ __html: quiz?.description }}></p>
      <hr />
      <div className="row">
        <div className="d-flex col-10 justify-content-center">
          <div className="card w-100" style={{ maxWidth: "900px" }}>
            <div className="card-body">
              <div className="d-flex card-title border-bottom">
                <div className="h3">{currentQuestion?.title}</div>
                <div className="ms-auto">
                  <b>Points: {currentQuestion?.points}</b>
                </div>
              </div>
              <p
                className="card-text border-bottom"
                dangerouslySetInnerHTML={{ __html: currentQuestion?.question }}
              ></p>
              <p>
                {
                  answerInstructions.filter(
                    (a) => a.type == currentQuestion?.type
                  )?.[0]?.instructions
                }
              </p>
              {currentQuestion?.type === "Multiple Choice" && (
                <MultipleChoiceAnswer
                  name={"multipleChoices" + currentQuestion?._id}
                  choices={currentQuestion?.choices}
                  selectedAnswer={
                    selectedAnswers?.find(
                      (a: any) => a.question === currentQuestion?._id
                    )?.answer
                  }
                  handleAnswerSelection={(answer) =>
                    handleAnswerSelection(currentQuestion?._id, answer)
                  }
                />
              )}
              {currentQuestion?.type === "True/False" && (
                <TrueFalseAnswer
                  name={"trueFalse" + currentQuestion?.id}
                  selectedAnswer={
                    selectedAnswers?.find(
                      (a: any) => a.question === currentQuestion?._id
                    )?.answer
                  }
                  handleAnswerSelection={(answer) =>
                    handleAnswerSelection(currentQuestion?._id, answer)
                  }
                />
              )}
              {currentQuestion?.type === "Fill in the Blanks" && (
                <FillInTheBlanksAnswer
                  name={"fillInBlanks" + currentQuestion?._id}
                  numberOfBlanks={currentQuestion?.blanksAnswers?.length}
                  selectedAnswer={
                    selectedAnswers?.find(
                      (a: any) => a.question === currentQuestion?._id
                    )?.answer
                  }
                  handleAnswerSelection={(answer) =>
                    handleAnswerSelection(currentQuestion?._id, answer)
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-2">
          <b>Questions</b>
          <ul className="list-group">
            {questions.map((question: any) => (
              <li
                key={question._id}
                className={`d-flex align-items-center list-group-item ${
                  question._id === currentQuestion?._id ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentQuestion(question)}
              >
                {question.title}
                {selectedAnswers?.find((a: any) => a.question === question._id)
                  ?.answer &&
                  selectedAnswers?.find((a: any) => a.question === question._id)
                    ?.answer?.length !== 0 && (
                    <FaCheckCircle
                      className="ms-auto"
                      color={
                        question._id === currentQuestion?._id
                          ? "white"
                          : "green"
                      }
                    />
                  )}
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success w-100" onClick={handleSubmit}>
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizPreview;
