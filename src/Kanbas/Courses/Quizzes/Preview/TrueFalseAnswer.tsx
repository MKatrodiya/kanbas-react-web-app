import { InputGroup } from "react-bootstrap";

function TrueFalseAnswer({
  name,
  selectedAnswer,
  handleAnswerSelection,
}: {
  name: string;
  selectedAnswer: string;
  handleAnswerSelection: (answer: string) => void;
}) {
  return (
    <div>
      <InputGroup className="mt-1">
        <InputGroup.Radio
          name={name}
          checked={selectedAnswer === "true"}
          onChange={() => handleAnswerSelection("true")}
          id={name + "true"}
        />
        <InputGroup.Text
          style={{ width: "70px" }}
          onClick={() => handleAnswerSelection("true")}
        >
          True
        </InputGroup.Text>
      </InputGroup>
      <InputGroup className="mt-1 mb-3">
        <InputGroup.Radio
          name={name}
          checked={selectedAnswer === "false"}
          onChange={() => handleAnswerSelection("false")}
          id={name + "false"}
        />
        <InputGroup.Text
          style={{ width: "70px" }}
          onClick={() => handleAnswerSelection("false")}
        >
          False
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}
export default TrueFalseAnswer;
