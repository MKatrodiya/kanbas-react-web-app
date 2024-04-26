import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "../client";
import { booleanToYesNo } from "../../../../utils/functions";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "../index.css";
import { FaBan, FaPencil } from "react-icons/fa6";
import "./index.css";
import { DateTime } from "luxon";

function QuizDetails() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<any>();
  const navigate = useNavigate();
  const quizProperties = [
    {
      propertyName: "Quiz Type",
      value: quiz?.type,
    },
    {
      propertyName: "Points",
      value: quiz?.points,
    },
    {
      propertyName: "Assignment Group",
      value: quiz?.assignmentGroup,
    },
    {
      propertyName: "Shuffle Answers",
      value: booleanToYesNo(quiz?.shuffleAnswers),
    },
    {
      propertyName: "Time Limit",
      value: quiz?.timeLimit,
    },
    {
      propertyName: "Multiple Attempts",
      value: booleanToYesNo(quiz?.multipleAttempts),
    },
    {
      propertyName: "Show Correct Answers",
      value: booleanToYesNo(quiz?.showCorrectAnswers),
    },
    {
      propertyName: "Show Correct Answers At",
      value:
        quiz?.showCorrectAnswerAt &&
        DateTime.fromISO(quiz?.showCorrectAnswersAt ?? "").toLocaleString({
          weekday: "short",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      propertyName: "Access Code",
      value: quiz?.accessCode,
    },
    {
      propertyName: "One Question At A Time",
      value: booleanToYesNo(quiz?.oneQuestionAtATime),
    },
    {
      propertyName: "Webcam Required",
      value: booleanToYesNo(quiz?.webcamRequired),
    },
    {
      propertyName: "Lock Questions After Answering",
      value: booleanToYesNo(quiz?.lockQuestionsAfterAnswering),
    },
    {
      propertyName: "Due Date",
      value:
        quiz?.dueDate &&
        DateTime.fromISO(quiz?.dueDate ?? "").toLocaleString({
          weekday: "short",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      propertyName: "Available Date",
      value:
        quiz?.availableDate &&
        DateTime.fromISO(quiz?.availableDate ?? "").toLocaleString({
          weekday: "short",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      propertyName: "Until Date",
      value:
        quiz?.availableUntil &&
        DateTime.fromISO(quiz?.availableUntil ?? "").toLocaleString({
          weekday: "short",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
  ];

  const getQuiz = async () => {
    const quizResponse: client.Quiz = await client.findQuizById(quizId);
    setQuiz(quizResponse);
  };

  const handleEditQuiz = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit`);
  };

  useEffect(() => {
    // const a = quiz?.status;
    getQuiz();
  }, []);

  const handlePublishQuiz = async (quiz: any) => {
    const updatedStatus =
      quiz?.status === "Unpublished" ? "Published" : "Unpublished";
    const updatedQuiz = { ...quiz, status: updatedStatus };
    await client.updateQuiz(quiz?._id, updatedQuiz);
    setQuiz(updatedQuiz);

    // const button = document.getElementById("publishButton");
    // if (button) {
    //   button.classList.toggle("wd-quiz-published");
    // }
  };

  const breadcrumbsElement = document.getElementById("wd-breadcrumbs-id");
  if (breadcrumbsElement) {
    breadcrumbsElement.innerText = quiz?.title || "";
  }

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="float-end wd-course-button-bar">
        <button
          id="publishButton"
          className={
            "btn wd-course-button ms-2" +
            (quiz?.status === "Published" ? " wd-quiz-published" : "")
          }
          onClick={() => {
            handlePublishQuiz(quiz);
          }}
        >
          {quiz?.status === "Published" ? (
            <FaCheckCircle className="me-1" />
          ) : (
            <FaBan className="me-1" />
          )}{" "}
          {quiz?.status}
        </button>
        <button
          className="btn wd-course-button ms-2"
          onClick={() =>
            navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Preview`)
          }
        >
          Preview
        </button>
        <button className="btn wd-course-button ms-2" onClick={handleEditQuiz}>
          <FaPencil className="me-1" />
          Edit
        </button>
        <button className="btn wd-course-button ms-2">
          <FaEllipsisV />
        </button>
      </div>
      <hr style={{ clear: "both" }} />
      <div className="flex-grow-1 d-block ms-2 me-2">
        <h2 style={{ fontWeight: "525" }}>{quiz?.title}</h2>
        {quizProperties.map((property, index) => (
          <div className="row">
            <div className="col-3 text-end">
              <b>{property.propertyName}</b>
            </div>
            <div className="col-9">{property.value}</div>
          </div>
        ))}
        <div className="ms-5 me-5">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Due</th>
                <th>For</th>
                <th>Available from</th>
                <th>Until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {quiz?.dueDate &&
                    DateTime.fromISO(quiz?.dueDate ?? "")?.toLocaleString({
                      weekday: "short",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </td>
                <td>Everyone</td>
                <td>
                  {quiz?.availableDate &&
                    DateTime.fromISO(quiz?.availableDate ?? "")?.toLocaleString(
                      {
                        weekday: "short",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                </td>
                <td>
                  {quiz?.availableUntil &&
                    DateTime.fromISO(
                      quiz?.availableUntil ?? ""
                    )?.toLocaleString({
                      weekday: "short",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default QuizDetails;
