import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import * as client from "../client";
import { DateTime } from "luxon";

function EditDetails() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<any>();
  const navigate = useNavigate();
  const getQuiz = async () => {
    const quizResponse = await client.findQuizById(quizId);
    setQuiz(quizResponse);
  };
  const updateQuiz = async (updatedQuiz: any) => {
    await client.updateQuiz(quizId, updatedQuiz);
  };
  const handleSave = async () => {
    await updateQuiz(quiz);
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`);
  };
  const handleSaveAndPublish = async () => {
    await updateQuiz({ ...quiz, status: "Published" });
    setQuiz({ ...quiz, status: "Published" });
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <div className="flex-grow-1 d-block ms-2 me-2">
      <div className="m-5">
        <div className="row">
          <input
            type="text"
            name="quizTitle"
            className="form-control"
            placeholder="Quiz Title"
            style={{ maxWidth: "500px" }}
            value={quiz?.title}
            onChange={(e) => {
              setQuiz({
                ...quiz,
                title: e.target.value,
              });
            }}
          />
        </div>
        <br />
        Quiz Instructions:
        <div className="row mt-2">
          <CKEditor
            editor={Editor}
            data={quiz?.description}
            onChange={(event, editor) => {
              setQuiz({ ...quiz, description: editor.getData() });
            }}
          />
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <label className="form-label float-end" htmlFor="quiz-group">
              Quiz Type
            </label>
          </div>
          <div className="col-6">
            <select
              id="quiz-group"
              className="form-select w-50"
              value={quiz?.type}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  type: e.target.value,
                });
              }}
            >
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <label className="form-label float-end">Points</label>
          </div>
          <div className="col-6">
            <input
              type="number"
              className="form-control w-25"
              value={quiz?.points}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  points: e.target.value,
                });
              }}
              disabled
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <label
              className="form-label float-end"
              htmlFor="quiz-assignment-group"
            >
              Assignment Group
            </label>
          </div>
          <div className="col-6">
            <select
              id="quiz-assignment-group"
              className="form-select w-50"
              value={quiz?.assignmentGroup}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  assignmentGroup: e.target.value,
                });
              }}
            >
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Assignments">Assignments</option>
              <option value="Project">Project</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-shuffle-answers"
              defaultChecked={quiz?.shuffleAnswers}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  shuffleAnswers: e.target.checked,
                });
              }}
            />
            <label className="form-label ms-2" htmlFor="quiz-shuffle-answers">
              Shuffle Answers
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-time-limit"
              defaultChecked={quiz?.timeLimit ? true : false}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  timeLimit: e.target.checked ? 20 : 0,
                });
              }}
            />
            <label className="form-label ms-2" htmlFor="quiz-time-limit">
              Time Limit
            </label>
            <input
              type="number"
              className="d-inline form-control ms-2 me-2"
              style={{ width: "60px" }}
              value={quiz?.timeLimit}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  timeLimit: e.target.value,
                });
              }}
            />
            Minutes
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-multiple-attempts"
              defaultChecked={quiz?.multipleAttempts}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  multipleAttempts: e.target.checked,
                });
              }}
            />
            <label className="form-label ms-2" htmlFor="quiz-multiple-attempts">
              Multiple Attempts
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-show-correct-answers"
              defaultChecked={quiz?.showCorrectAnswers}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  showCorrectAnswers: e.target.checked,
                });
              }}
            />
            <label
              className="form-label ms-2"
              htmlFor="quiz-show-correct-answers"
            >
              Show Correct Answers
            </label>
            {/* <br /> */}
            <label
              className="form-label ms-4"
              htmlFor="quiz-show-correct-answers-at"
            >
              At
            </label>
            <input
              type="datetime-local"
              className="d-inline form-control w-50 ms-2"
              value={DateTime.fromISO(quiz?.showCorrectAnswersAt).toFormat(
                "yyyy-MM-dd'T'HH:mm"
              )}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  showCorrectAnswersAt: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <label className="form-label float-end">Access Code</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              value={quiz?.accessCode}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  accessCode: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-one-question-at-a-time"
              defaultChecked={quiz?.oneQuestionAtATime}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  oneQuestionAtATime: e.target.checked,
                });
              }}
            />
            <label
              className="form-label ms-2"
              htmlFor="quiz-one-question-at-a-time"
            >
              One Question At A Time
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-webcam-required"
              defaultChecked={quiz?.webcamRequired}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  webcamRequired: e.target.checked,
                });
              }}
            />
            <label className="form-label ms-2" htmlFor="quiz-webcam-required">
              Webcam Required
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-6">
            <input
              type="checkbox"
              id="quiz-lock-questions-after-answering"
              defaultChecked={quiz?.lockQuestionsAfterAnswering}
              onChange={(e) => {
                setQuiz({
                  ...quiz,
                  lockQuestionsAfterAnswering: e.target.checked,
                });
              }}
            />
            <label
              className="form-label ms-2"
              htmlFor="quiz-lock-questions-after-answering"
            >
              Lock Questions After Answering
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <label className="form-label float-end" htmlFor="Assign">
              Assign
            </label>
          </div>
          <div className="col-6">
            <div
              className="row border border-1"
              style={{ margin: "3px", padding: "10px" }}
            >
              <div className="col-12">
                <label className="form-label mt-2" style={{ width: "100%" }}>
                  <div>
                    <b>Assign to</b>
                  </div>
                  <select
                    id="Assign"
                    className="form-select"
                    disabled
                    onChange={(e) => {
                      setQuiz({
                        ...quiz,
                        assignTo: e.target.value,
                      });
                    }}
                  >
                    <option value="Everyone">Everyone</option>
                    <option value="Everyone">Everyone</option>
                    <option value="Everyone">Everyone</option>
                  </select>
                </label>
              </div>

              <div className="col-12 mt-2">
                <label className="form-label" htmlFor="Due">
                  <b>Due Date</b>
                </label>
                <input
                  className="form-control"
                  id="Due"
                  type="datetime-local"
                  value={DateTime.fromISO(quiz?.dueDate).toFormat(
                    "yyyy-MM-dd'T'HH:mm"
                  )}
                  onChange={(e) => {
                    setQuiz({
                      ...quiz,
                      dueDate: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="col-6 mt-3">
                <label className="form-label" htmlFor="available-from">
                  <b>Available from</b>
                </label>
                <input
                  className="form-control"
                  id="available-from"
                  type="datetime-local"
                  value={DateTime.fromISO(quiz?.availableDate).toFormat(
                    "yyyy-MM-dd'T'HH:mm"
                  )}
                  onChange={(e) => {
                    setQuiz({
                      ...quiz,
                      availableDate: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="col-6 mt-3">
                <label className="form-label" htmlFor="until">
                  <b>Until</b>
                </label>
                <input
                  className="form-control"
                  id="until"
                  type="datetime-local"
                  value={DateTime.fromISO(quiz?.availableUntil).toFormat(
                    "yyyy-MM-dd'T'HH:mm"
                  )}
                  onChange={(e) => {
                    setQuiz({
                      ...quiz,
                      availableUntil: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex" style={{ alignItems: "center" }}>
          <div className="ms-auto">
            <button
              className="wd-asmt-button"
              type="submit"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="wd-asmt-button wd-btn-save"
              type="submit"
              onClick={handleSaveAndPublish}
            >
              Save & Publish
            </button>
            <button
              className="wd-asmt-button wd-btn-save"
              type="submit"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditDetails;
