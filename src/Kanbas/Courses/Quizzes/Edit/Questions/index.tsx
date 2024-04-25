import { FormControl, InputGroup } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { MouseEvent, useEffect, useState } from "react";
import * as client from "../../questionsClient";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { useParams } from "react-router";
import { get } from "http";
import TrueFalseQuestion from "./TrueFalseQuestion";
import FillInTheBlanksQuestion from "./FillInTheBlanksQuestion";

function EditQuestions() {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState<any>([]);
  const questionTypes = [
    {
      type: "Multiple Choice",
      questionInstruction:
        "Enter your question and multiple answers, then select the correct answer.",
      answerInstruction:
        "Click the radio button to mark a choice as correct answer",
    },
    {
      type: "True/False",
      questionInstruction:
        "Enter your question, then select if True or False is the correct answer.",
      answerInstruction: "Click the radio button to mark a correct answer",
    },
    {
      type: "Fill in the Blanks",
      questionInstruction:
        "Enter your question, then define the blank spaces using 5 underscores. Define all possible correct answers for the blanks.",
      answerInstruction:
        "Enter the correct answers for the blanks separated by commas.",
    },
  ];
  const getQuestions = async () => {
    const questions = await client.findQuestionsForQuiz(quizId);
    setQuestions(questions);
  };
  useEffect(() => {
    getQuestions();
  }, [quizId]);
  const handleUpdateQuestionTitle = (title: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].title = title;
    setQuestions(newQuestions);
  };
  const handleUpdateQuestionType = (type: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].type = type;
    newQuestions[index].choices = [];
    newQuestions[index].correctAnswer = "";
    newQuestions[index].blanksAnswers = [];
    setQuestions(newQuestions);
  };
  const handleUpdateQuestionPoints = (points: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].points = Number(points);
    setQuestions(newQuestions);
  };
  const handleUpdateQuestion = (question: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].question = question;
    setQuestions(newQuestions);
  };
  const handleUpdateChoices = (updatedChoices: string[], index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].choices = updatedChoices;
    newQuestions[index].correctAnswer = "";
    newQuestions[index].blanksAnswers = [];
    setQuestions(newQuestions);
  };
  const handleUpdateCorrectAnswer = (correctAnswer: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = correctAnswer;
    setQuestions(newQuestions);
  };
  const handleUpdateBlanksAnswers = (
    blanksAnswers: string[],
    index: number
  ) => {
    const newQuestions = [...questions];
    newQuestions[index].blanksAnswers = blanksAnswers;
    newQuestions[index].choices = [];
    setQuestions(newQuestions);
  };
  const handleSaveQuestion = async (question: any) => {
    if (question?._id) {
      await client.updateQuestion(question._id, question);
    } else {
      await client.createQuestion(quizId, question);
    }
    await getQuestions();
  };
  const handleCancelQuestion = async (e: any, index: number) => {
    e.preventDefault();
    const questionId = questions[index]._id;
    if (questionId) {
      const question = await client.findQuestionById(questionId);
      const newQuestions = [...questions];
      newQuestions[index] = question;
      setQuestions(newQuestions);
    } else {
      const newQuestions = questions.filter((_: any, i: number) => i !== index);
      setQuestions(newQuestions);
    }
  };
  const handleCancel = async () => {
    const unmodifiedQuestions = await client.findQuestionsForQuiz(quizId);
    setQuestions(unmodifiedQuestions);
  };
  const handleSaveAndPublish = async () => {
    await handleSave();
    await client.publishQuiz(quizId);
  };
  const handleSave = async () => {
    const updatedQuestions = await client.bulkCreateQuestions(
      quizId,
      questions
    );
    setQuestions(updatedQuestions);
  };
  const handleDeleteQuestion = async (e: MouseEvent, questionId: string) => {
    e.preventDefault();
    await client.deleteQuestion(questionId);
    await getQuestions();
  };

  return (
    <>
      <div
        className="flex-grow-1 mt-3"
        style={{ marginLeft: "10em", marginRight: "10em" }}
      >
        {questions?.map((question: any, index: number) => (
          <div className="border border-dark p-3 mb-5" key={index}>
            <div className="row d-flex">
              <input
                type="text"
                value={question?.title}
                className="form-control w-25 ms-3"
                placeholder="Question Title"
                onChange={(e) =>
                  handleUpdateQuestionTitle(e.target.value, index)
                }
              />
              <select
                id="questionType"
                className="form-select ms-2 w-25"
                value={question?.type}
                onChange={(e) =>
                  handleUpdateQuestionType(e.target.value, index)
                }
              >
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="True/False">True/False</option>
                <option value="Fill in the Blanks">Fill in the Blanks</option>
              </select>
              <div className="ms-auto" style={{ width: "180px" }}>
                <InputGroup>
                  <InputGroup.Text>Points</InputGroup.Text>
                  <FormControl
                    type="number"
                    value={question?.points}
                    min={0}
                    style={{ width: "50px" }}
                    onChange={(e) =>
                      handleUpdateQuestionPoints(e.target.value, index)
                    }
                  />
                </InputGroup>
              </div>
            </div>
            <hr />
            <div>
              <p>
                {
                  questionTypes.find((q) => q.type === question?.type)
                    ?.questionInstruction
                }
              </p>
              <h6>
                <b>Question:</b>
              </h6>
              <div style={{ maxWidth: "900px" }}>
                <CKEditor
                  editor={Editor}
                  data={question?.question}
                  onChange={(event: any, editor: any) =>
                    handleUpdateQuestion(editor.getData(), index)
                  }
                />
              </div>
              <br />
              <h6>
                <b>Answers:</b>{" "}
                <i>
                  (
                  {
                    questionTypes.find((q) => q.type === question?.type)
                      ?.answerInstruction
                  }
                </i>
              </h6>
              {question?.type === "Multiple Choice" && (
                <MultipleChoiceQuestion
                  name={"multipleChoicesRadio " + index}
                  choices={question?.choices}
                  correctAnswer={question?.correctAnswer}
                  setChoices={(updatedChoices: string[]) =>
                    handleUpdateChoices(updatedChoices, index)
                  }
                  setCorrectAnswer={(correctAnswer: any) =>
                    handleUpdateCorrectAnswer(correctAnswer, index)
                  }
                />
              )}
              {question?.type === "True/False" && (
                <TrueFalseQuestion
                  name={"trueFalseRadio" + index}
                  correctAnswer={question?.correctAnswer}
                  setCorrectAnswer={(correctAnswer: any) =>
                    handleUpdateCorrectAnswer(correctAnswer, index)
                  }
                />
              )}
              {question?.type === "Fill in the Blanks" && (
                <FillInTheBlanksQuestion
                  name={"fillTheBlanks" + index}
                  question={question?.question}
                  blankAnswers={question?.blanksAnswers}
                  setBlanksAnswers={(blanksAnswers: string[]) =>
                    handleUpdateBlanksAnswers(blanksAnswers, index)
                  }
                />
              )}
            </div>
            <div className="d-flex mt-3">
              <button
                className="btn"
                style={{ backgroundColor: "#f5f5f5" }}
                onClick={async (e) => {
                  await handleCancelQuestion(e, index);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={() => handleSaveQuestion(question)}
              >
                {question?._id ? "Update" : "Save"} Question
              </button>
              {question?._id && (
                <button
                  className="btn btn-danger ms-auto"
                  type="submit"
                  onClick={(e) => handleDeleteQuestion(e, question._id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="btn"
          onClick={() =>
            setQuestions([
              ...questions,
              {
                type: "Multiple Choice",
                title: "",
                points: 0,
                choices: [],
                question: "",
                correctAnswer: "",
                blanksAnswers: [],
              },
            ])
          }
          style={{ backgroundColor: "#f5f5f5" }}
        >
          + New Question
        </button>
      </div>
      <div className="d-flex mt-3 me-5 mb-3" style={{ alignItems: "center" }}>
        <div className="ms-auto">
          <button
            className="wd-asmt-button me-1"
            type="submit"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="wd-asmt-button wd-btn-save me-1"
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
    </>
  );
}
export default EditQuestions;
