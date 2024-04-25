import { FormControl, InputGroup } from "react-bootstrap";

function MultipleChoiceAnswer({
  name,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}: {
  name: string;
  choices: string[];
  selectedAnswer: string;
  handleAnswerSelection: (answer: string) => void;
}) {
  return (
    <>
      {choices?.map((choice, index) => (
        <InputGroup
          className="mt-1"
          style={{ minWidth: "400px", maxWidth: "700px" }}
          key={name + index}
        >
          <InputGroup.Radio
            name={name}
            id={name + index}
            onChange={(e) => {
              handleAnswerSelection(choice);
            }}
            checked={selectedAnswer === choice}
          />
          <label htmlFor={name + index}>
            <InputGroup.Text style={{ minWidth: "400px", maxWidth: "700px" }}>
              {choice}
            </InputGroup.Text>
          </label>
        </InputGroup>
      ))}
    </>
  );
}
export default MultipleChoiceAnswer;
