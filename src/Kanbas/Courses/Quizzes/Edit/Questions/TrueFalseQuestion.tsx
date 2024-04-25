import { InputGroup } from "react-bootstrap";

function TrueFalseQuestion({
  name,
  correctAnswer,
  setCorrectAnswer,
}: {
  name: string;
  correctAnswer: string;
  setCorrectAnswer: (correctAnswer: any) => void;
}) {
  const correctAnswerBoolean =
    correctAnswer.toLowerCase() === "true" ? true : false;
  return (
    <>
      <InputGroup className="mt-1">
        <InputGroup.Radio
          name={name}
          checked={correctAnswerBoolean}
          onChange={() => setCorrectAnswer("true")}
          id={name + "true"}
        />
        <InputGroup.Text style={{ width: "70px" }}>True</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mt-1 mb-3">
        <InputGroup.Radio
          name={name}
          checked={!correctAnswerBoolean}
          onChange={() => setCorrectAnswer("false")}
          id={name + "false"}
        />
        <InputGroup.Text style={{ width: "70px" }}>False</InputGroup.Text>
      </InputGroup>
    </>
  );
}
export default TrueFalseQuestion;
